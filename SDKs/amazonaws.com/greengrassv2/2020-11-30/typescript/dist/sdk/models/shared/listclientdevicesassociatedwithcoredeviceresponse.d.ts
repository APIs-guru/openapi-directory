import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociatedClientDevice } from "./associatedclientdevice";
export declare class ListClientDevicesAssociatedWithCoreDeviceResponse extends SpeakeasyBase {
    associatedClientDevices?: AssociatedClientDevice[];
    nextToken?: string;
}
