import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information for filtering a list of PII entity detection jobs.
**/
export declare class PiiEntitiesDetectionJobFilter extends SpeakeasyBase {
    jobName?: string;
    jobStatus?: JobStatusEnum;
    submitTimeAfter?: Date;
    submitTimeBefore?: Date;
}
