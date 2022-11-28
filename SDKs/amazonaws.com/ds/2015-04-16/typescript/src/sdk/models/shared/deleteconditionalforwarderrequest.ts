import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteConditionalForwarderRequest
/** 
 * Deletes a conditional forwarder.
**/
export class DeleteConditionalForwarderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;
}
