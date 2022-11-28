import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StoreImageTaskResult
/** 
 * The information about the AMI store task, including the progress of the task.
**/
export class StoreImageTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amiId?: string;

  @SpeakeasyMetadata()
  bucket?: string;

  @SpeakeasyMetadata()
  progressPercentage?: number;

  @SpeakeasyMetadata()
  s3objectKey?: string;

  @SpeakeasyMetadata()
  storeTaskFailureReason?: string;

  @SpeakeasyMetadata()
  storeTaskState?: string;

  @SpeakeasyMetadata()
  taskStartTime?: Date;
}
