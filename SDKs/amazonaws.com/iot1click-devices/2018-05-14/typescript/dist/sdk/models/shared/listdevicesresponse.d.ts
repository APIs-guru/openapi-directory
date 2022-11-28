import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceDescription } from "./devicedescription";
export declare class ListDevicesResponse extends SpeakeasyBase {
    devices?: DeviceDescription[];
    nextToken?: string;
}
