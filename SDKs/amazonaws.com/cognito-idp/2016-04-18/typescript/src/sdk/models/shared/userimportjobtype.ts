import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserImportJobStatusTypeEnum } from "./userimportjobstatustypeenum";


// UserImportJobType
/** 
 * The user import job type.
**/
export class UserImportJobType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @Metadata({ data: "json, name=CompletionDate" })
  completionDate?: Date;

  @Metadata({ data: "json, name=CompletionMessage" })
  completionMessage?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=FailedUsers" })
  failedUsers?: number;

  @Metadata({ data: "json, name=ImportedUsers" })
  importedUsers?: number;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=PreSignedUrl" })
  preSignedUrl?: string;

  @Metadata({ data: "json, name=SkippedUsers" })
  skippedUsers?: number;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: UserImportJobStatusTypeEnum;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
