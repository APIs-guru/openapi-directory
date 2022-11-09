import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyTrustResult
/** 
 * Result of a VerifyTrust request.
**/
export class VerifyTrustResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrustId" })
  trustId?: string;
}
