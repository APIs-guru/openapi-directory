import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociatedClientDevice } from "./associatedclientdevice";



export class ListClientDevicesAssociatedWithCoreDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedClientDevices", elemType: AssociatedClientDevice })
  associatedClientDevices?: AssociatedClientDevice[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
