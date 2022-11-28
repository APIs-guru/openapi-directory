import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateClientDeviceWithCoreDeviceErrorEntry
/** 
 * Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
**/
export class AssociateClientDeviceWithCoreDeviceErrorEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}
