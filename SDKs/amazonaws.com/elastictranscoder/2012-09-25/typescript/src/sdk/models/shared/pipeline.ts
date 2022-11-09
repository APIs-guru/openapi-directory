import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineOutputConfig } from "./pipelineoutputconfig";
import { Notifications } from "./notifications";
import { PipelineOutputConfig } from "./pipelineoutputconfig";


// Pipeline
/** 
 * The pipeline (queue) that is used to manage jobs.
**/
export class Pipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=AwsKmsKeyArn" })
  awsKmsKeyArn?: string;

  @Metadata({ data: "json, name=ContentConfig" })
  contentConfig?: PipelineOutputConfig;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InputBucket" })
  inputBucket?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Notifications" })
  notifications?: Notifications;

  @Metadata({ data: "json, name=OutputBucket" })
  outputBucket?: string;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=ThumbnailConfig" })
  thumbnailConfig?: PipelineOutputConfig;
}
