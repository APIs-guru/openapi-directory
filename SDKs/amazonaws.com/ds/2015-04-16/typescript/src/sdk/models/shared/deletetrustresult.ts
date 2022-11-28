import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTrustResult
/** 
 * The result of a DeleteTrust request.
**/
export class DeleteTrustResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrustId" })
  trustId?: string;
}
