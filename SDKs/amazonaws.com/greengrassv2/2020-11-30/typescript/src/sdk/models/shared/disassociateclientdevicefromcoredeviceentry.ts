import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateClientDeviceFromCoreDeviceEntry
/** 
 * Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.
**/
export class DisassociateClientDeviceFromCoreDeviceEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName: string;
}
