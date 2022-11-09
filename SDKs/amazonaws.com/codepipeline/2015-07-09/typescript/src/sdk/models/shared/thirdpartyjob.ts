import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThirdPartyJob
/** 
 * A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action.
**/
export class ThirdPartyJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;
}
