import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Provides information for filtering a list of detection jobs.
**/
export declare class ComprehendMedicalAsyncJobFilter extends SpeakeasyBase {
    jobName?: string;
    jobStatus?: JobStatusEnum;
    submitTimeAfter?: Date;
    submitTimeBefore?: Date;
}
