import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeCapacity } from "./computecapacity";
import { DomainJoinInfo } from "./domainjoininfo";
import { FleetTypeEnum } from "./fleettypeenum";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";
export declare class CreateFleetRequest extends SpeakeasyBase {
    computeCapacity: ComputeCapacity;
    description?: string;
    disconnectTimeoutInSeconds?: number;
    displayName?: string;
    domainJoinInfo?: DomainJoinInfo;
    enableDefaultInternetAccess?: boolean;
    fleetType?: FleetTypeEnum;
    iamRoleArn?: string;
    idleDisconnectTimeoutInSeconds?: number;
    imageArn?: string;
    imageName?: string;
    instanceType: string;
    maxUserDurationInSeconds?: number;
    name: string;
    streamView?: StreamViewEnum;
    tags?: Map<string, string>;
    vpcConfig?: VpcConfig;
}
