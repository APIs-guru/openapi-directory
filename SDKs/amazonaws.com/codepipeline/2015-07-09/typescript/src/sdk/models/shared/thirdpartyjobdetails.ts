import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThirdPartyJobData } from "./thirdpartyjobdata";


// ThirdPartyJobDetails
/** 
 * The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
**/
export class ThirdPartyJobDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ThirdPartyJobData;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=nonce" })
  nonce?: string;
}
