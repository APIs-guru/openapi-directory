import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action.
**/
export declare class ThirdPartyJob extends SpeakeasyBase {
    clientId?: string;
    jobId?: string;
}
