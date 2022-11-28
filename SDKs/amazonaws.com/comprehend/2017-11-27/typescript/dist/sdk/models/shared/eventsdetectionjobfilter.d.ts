import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information for filtering a list of event detection jobs.
**/
export declare class EventsDetectionJobFilter extends SpeakeasyBase {
    jobName?: string;
    jobStatus?: JobStatusEnum;
    submitTimeAfter?: Date;
    submitTimeBefore?: Date;
}
