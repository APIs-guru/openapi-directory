import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceInstance } from "./deviceinstance";
export declare class ListDeviceInstancesResult extends SpeakeasyBase {
    deviceInstances?: DeviceInstance[];
    nextToken?: string;
}
