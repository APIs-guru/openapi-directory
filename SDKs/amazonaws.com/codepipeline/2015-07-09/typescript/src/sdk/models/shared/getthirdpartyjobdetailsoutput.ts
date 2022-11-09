import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThirdPartyJobDetails } from "./thirdpartyjobdetails";


// GetThirdPartyJobDetailsOutput
/** 
 * Represents the output of a <code>GetThirdPartyJobDetails</code> action.
**/
export class GetThirdPartyJobDetailsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobDetails" })
  jobDetails?: ThirdPartyJobDetails;
}
