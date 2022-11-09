import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociatedClientDevice } from "./associatedclientdevice";


export class ListClientDevicesAssociatedWithCoreDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedClientDevices", elemType: shared.AssociatedClientDevice })
  associatedClientDevices?: AssociatedClientDevice[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
