import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThirdPartyJob
/** 
 * A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action.
**/
export class ThirdPartyJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;
}
