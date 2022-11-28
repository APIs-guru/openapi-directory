import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineOutputConfig } from "./pipelineoutputconfig";
import { Notifications } from "./notifications";



// Pipeline
/** 
 * The pipeline (queue) that is used to manage jobs.
**/
export class Pipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsKmsKeyArn" })
  awsKmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentConfig" })
  contentConfig?: PipelineOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InputBucket" })
  inputBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Notifications" })
  notifications?: Notifications;

  @SpeakeasyMetadata({ data: "json, name=OutputBucket" })
  outputBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailConfig" })
  thumbnailConfig?: PipelineOutputConfig;
}
