import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyJob } from "./thirdpartyjob";
/**
 * Represents the output of a <code>PollForThirdPartyJobs</code> action.
**/
export declare class PollForThirdPartyJobsOutput extends SpeakeasyBase {
    jobs?: ThirdPartyJob[];
}
