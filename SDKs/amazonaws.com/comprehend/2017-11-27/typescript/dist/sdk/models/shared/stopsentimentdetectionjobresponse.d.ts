import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class StopSentimentDetectionJobResponse extends SpeakeasyBase {
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
