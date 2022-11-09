import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeCapacityStatus } from "./computecapacitystatus";
import { DomainJoinInfo } from "./domainjoininfo";
import { FleetError } from "./fleeterror";
import { FleetTypeEnum } from "./fleettypeenum";
import { FleetStateEnum } from "./fleetstateenum";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Describes a fleet.
**/
export declare class Fleet extends SpeakeasyBase {
    arn: string;
    computeCapacityStatus: ComputeCapacityStatus;
    createdTime?: Date;
    description?: string;
    disconnectTimeoutInSeconds?: number;
    displayName?: string;
    domainJoinInfo?: DomainJoinInfo;
    enableDefaultInternetAccess?: boolean;
    fleetErrors?: FleetError[];
    fleetType?: FleetTypeEnum;
    iamRoleArn?: string;
    idleDisconnectTimeoutInSeconds?: number;
    imageArn?: string;
    imageName?: string;
    instanceType: string;
    maxUserDurationInSeconds?: number;
    name: string;
    state: FleetStateEnum;
    streamView?: StreamViewEnum;
    vpcConfig?: VpcConfig;
}
