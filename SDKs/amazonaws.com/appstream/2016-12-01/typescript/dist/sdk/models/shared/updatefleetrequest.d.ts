import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetAttributeEnum } from "./fleetattributeenum";
import { ComputeCapacity } from "./computecapacity";
import { DomainJoinInfo } from "./domainjoininfo";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";
export declare class UpdateFleetRequest extends SpeakeasyBase {
    attributesToDelete?: FleetAttributeEnum[];
    computeCapacity?: ComputeCapacity;
    deleteVpcConfig?: boolean;
    description?: string;
    disconnectTimeoutInSeconds?: number;
    displayName?: string;
    domainJoinInfo?: DomainJoinInfo;
    enableDefaultInternetAccess?: boolean;
    iamRoleArn?: string;
    idleDisconnectTimeoutInSeconds?: number;
    imageArn?: string;
    imageName?: string;
    instanceType?: string;
    maxUserDurationInSeconds?: number;
    name?: string;
    streamView?: StreamViewEnum;
    vpcConfig?: VpcConfig;
}
