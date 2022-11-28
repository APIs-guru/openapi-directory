import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a point that a job can resume processing.
**/
export declare class JobBookmarkEntry extends SpeakeasyBase {
    attempt?: number;
    jobBookmark?: string;
    jobName?: string;
    previousRunId?: string;
    run?: number;
    runId?: string;
    version?: number;
}
