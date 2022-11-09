import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateTrustResult
/** 
 * The result of a CreateTrust request.
**/
export class CreateTrustResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrustId" })
  trustId?: string;
}
