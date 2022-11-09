import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisassociateClientDeviceFromCoreDeviceErrorEntry
/** 
 * Contains an error that occurs from a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
**/
export class DisassociateClientDeviceFromCoreDeviceErrorEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}
