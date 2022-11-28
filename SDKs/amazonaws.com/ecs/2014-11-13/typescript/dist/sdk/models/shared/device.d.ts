import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceCgroupPermissionEnum } from "./devicecgrouppermissionenum";
/**
 * An object representing a container instance host device.
**/
export declare class Device extends SpeakeasyBase {
    containerPath?: string;
    hostPath: string;
    permissions?: DeviceCgroupPermissionEnum[];
}
