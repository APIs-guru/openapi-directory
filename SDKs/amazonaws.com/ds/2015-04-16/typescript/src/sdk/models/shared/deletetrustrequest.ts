import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteTrustRequest
/** 
 * Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
**/
export class DeleteTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteAssociatedConditionalForwarder" })
  deleteAssociatedConditionalForwarder?: boolean;

  @Metadata({ data: "json, name=TrustId" })
  trustId: string;
}
