import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTrustRequest
/** 
 * Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
**/
export class DeleteTrustRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteAssociatedConditionalForwarder" })
  deleteAssociatedConditionalForwarder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TrustId" })
  trustId: string;
}
