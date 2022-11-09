import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThirdPartyJob } from "./thirdpartyjob";


// PollForThirdPartyJobsOutput
/** 
 * Represents the output of a <code>PollForThirdPartyJobs</code> action.
**/
export class PollForThirdPartyJobsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.ThirdPartyJob })
  jobs?: ThirdPartyJob[];
}
