import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyJobDetails } from "./thirdpartyjobdetails";



// GetThirdPartyJobDetailsOutput
/** 
 * Represents the output of a <code>GetThirdPartyJobDetails</code> action.
**/
export class GetThirdPartyJobDetailsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobDetails" })
  jobDetails?: ThirdPartyJobDetails;
}
