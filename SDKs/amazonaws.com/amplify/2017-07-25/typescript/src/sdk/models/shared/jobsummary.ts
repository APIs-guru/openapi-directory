import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { JobStatusEnum } from "./jobstatusenum";


// JobSummary
/** 
 *  Describes the summary for an execution job for an Amplify app. 
**/
export class JobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId: string;

  @Metadata({ data: "json, name=commitMessage" })
  commitMessage: string;

  @Metadata({ data: "json, name=commitTime" })
  commitTime: Date;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=jobArn" })
  jobArn: string;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=jobType" })
  jobType: JobTypeEnum;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=status" })
  status: JobStatusEnum;
}
