import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchListPolicyAttachmentsResponse
/** 
 * Represents the output of a <a>ListPolicyAttachments</a> response operation.
**/
export class BatchListPolicyAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectIdentifiers" })
  objectIdentifiers?: string[];
}
