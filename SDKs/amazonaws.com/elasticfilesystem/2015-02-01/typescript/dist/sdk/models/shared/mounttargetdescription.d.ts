import { SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleStateEnum } from "./lifecyclestateenum";
/**
 * Provides a description of a mount target.
**/
export declare class MountTargetDescription extends SpeakeasyBase {
    availabilityZoneId?: string;
    availabilityZoneName?: string;
    fileSystemId: string;
    ipAddress?: string;
    lifeCycleState: LifeCycleStateEnum;
    mountTargetId: string;
    networkInterfaceId?: string;
    ownerId?: string;
    subnetId: string;
    vpcId?: string;
}
