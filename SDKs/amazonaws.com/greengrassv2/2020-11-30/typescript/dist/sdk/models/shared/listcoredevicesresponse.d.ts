import { SpeakeasyBase } from "../../../internal/utils";
import { CoreDevice } from "./coredevice";
export declare class ListCoreDevicesResponse extends SpeakeasyBase {
    coreDevices?: CoreDevice[];
    nextToken?: string;
}
