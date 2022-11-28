import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The information about the AMI store task, including the progress of the task.
**/
export declare class StoreImageTaskResult extends SpeakeasyBase {
    amiId?: string;
    bucket?: string;
    progressPercentage?: number;
    s3objectKey?: string;
    storeTaskFailureReason?: string;
    storeTaskState?: string;
    taskStartTime?: Date;
}
