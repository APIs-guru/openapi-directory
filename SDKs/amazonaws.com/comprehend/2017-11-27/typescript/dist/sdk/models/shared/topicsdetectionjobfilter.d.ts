import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information for filtering topic detection jobs. For more information, see .
**/
export declare class TopicsDetectionJobFilter extends SpeakeasyBase {
    jobName?: string;
    jobStatus?: JobStatusEnum;
    submitTimeAfter?: Date;
    submitTimeBefore?: Date;
}
