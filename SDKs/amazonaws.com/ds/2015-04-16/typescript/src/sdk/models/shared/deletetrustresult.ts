import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteTrustResult
/** 
 * The result of a DeleteTrust request.
**/
export class DeleteTrustResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrustId" })
  trustId?: string;
}
