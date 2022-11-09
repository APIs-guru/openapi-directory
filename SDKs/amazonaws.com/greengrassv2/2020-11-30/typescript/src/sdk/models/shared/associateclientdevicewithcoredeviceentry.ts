import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssociateClientDeviceWithCoreDeviceEntry
/** 
 * Contains a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.
**/
export class AssociateClientDeviceWithCoreDeviceEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingName" })
  thingName: string;
}
