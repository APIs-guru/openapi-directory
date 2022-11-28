import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceEvent } from "./deviceevent";
export declare class ListDeviceEventsResponse extends SpeakeasyBase {
    events?: DeviceEvent[];
    nextToken?: string;
}
