import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { JobStatusEnum } from "./jobstatusenum";



// JobSummary
/** 
 *  Describes the summary for an execution job for an Amplify app. 
**/
export class JobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=commitMessage" })
  commitMessage: string;

  @SpeakeasyMetadata({ data: "json, name=commitTime" })
  commitTime: Date;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType: JobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStatusEnum;
}
