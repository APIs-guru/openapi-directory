import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchListPolicyAttachmentsResponse
/** 
 * Represents the output of a <a>ListPolicyAttachments</a> response operation.
**/
export class BatchListPolicyAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifiers" })
  objectIdentifiers?: string[];
}
