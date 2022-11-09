import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyTrustRequest
/** 
 * Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.
**/
export class VerifyTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrustId" })
  trustId: string;
}
