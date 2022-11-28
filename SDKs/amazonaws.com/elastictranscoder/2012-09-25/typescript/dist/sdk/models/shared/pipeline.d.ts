import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineOutputConfig } from "./pipelineoutputconfig";
import { Notifications } from "./notifications";
/**
 * The pipeline (queue) that is used to manage jobs.
**/
export declare class Pipeline extends SpeakeasyBase {
    arn?: string;
    awsKmsKeyArn?: string;
    contentConfig?: PipelineOutputConfig;
    id?: string;
    inputBucket?: string;
    name?: string;
    notifications?: Notifications;
    outputBucket?: string;
    role?: string;
    status?: string;
    thumbnailConfig?: PipelineOutputConfig;
}
