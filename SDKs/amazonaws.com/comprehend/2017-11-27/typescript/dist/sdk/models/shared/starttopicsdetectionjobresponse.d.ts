import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class StartTopicsDetectionJobResponse extends SpeakeasyBase {
    jobArn?: string;
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
