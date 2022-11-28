import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTrustResult
/** 
 * The result of a CreateTrust request.
**/
export class CreateTrustResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrustId" })
  trustId?: string;
}
