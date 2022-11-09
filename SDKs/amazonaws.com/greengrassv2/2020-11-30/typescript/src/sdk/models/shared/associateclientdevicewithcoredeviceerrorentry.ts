import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssociateClientDeviceWithCoreDeviceErrorEntry
/** 
 * Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
**/
export class AssociateClientDeviceWithCoreDeviceErrorEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}
