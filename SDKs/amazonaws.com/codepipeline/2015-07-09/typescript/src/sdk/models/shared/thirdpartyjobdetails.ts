import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyJobData } from "./thirdpartyjobdata";



// ThirdPartyJobDetails
/** 
 * The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
**/
export class ThirdPartyJobDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ThirdPartyJobData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: string;
}
