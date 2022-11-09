import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceCgroupPermissionEnum } from "./devicecgrouppermissionenum";
/**
 * <p>An object representing a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>
**/
export declare class Device extends SpeakeasyBase {
    containerPath?: string;
    hostPath: string;
    permissions?: DeviceCgroupPermissionEnum[];
}
