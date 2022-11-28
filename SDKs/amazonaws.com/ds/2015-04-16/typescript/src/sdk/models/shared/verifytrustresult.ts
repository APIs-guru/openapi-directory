import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyTrustResult
/** 
 * Result of a VerifyTrust request.
**/
export class VerifyTrustResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrustId" })
  trustId?: string;
}
