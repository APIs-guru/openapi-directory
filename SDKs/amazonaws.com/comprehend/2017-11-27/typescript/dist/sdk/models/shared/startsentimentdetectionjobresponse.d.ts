import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class StartSentimentDetectionJobResponse extends SpeakeasyBase {
    jobArn?: string;
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
