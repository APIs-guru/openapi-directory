import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserImportJobStatusTypeEnum } from "./userimportjobstatustypeenum";



// UserImportJobType
/** 
 * The user import job type.
**/
export class UserImportJobType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CompletionDate" })
  completionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CompletionMessage" })
  completionMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailedUsers" })
  failedUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=ImportedUsers" })
  importedUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=PreSignedUrl" })
  preSignedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=SkippedUsers" })
  skippedUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UserImportJobStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
