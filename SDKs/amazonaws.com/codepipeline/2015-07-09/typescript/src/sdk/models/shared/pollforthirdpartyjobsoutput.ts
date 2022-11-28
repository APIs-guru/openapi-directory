import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyJob } from "./thirdpartyjob";



// PollForThirdPartyJobsOutput
/** 
 * Represents the output of a <code>PollForThirdPartyJobs</code> action.
**/
export class PollForThirdPartyJobsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: ThirdPartyJob })
  jobs?: ThirdPartyJob[];
}
