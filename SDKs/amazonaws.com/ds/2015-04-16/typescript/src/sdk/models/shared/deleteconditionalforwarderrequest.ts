import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteConditionalForwarderRequest
/** 
 * Deletes a conditional forwarder.
**/
export class DeleteConditionalForwarderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;
}
