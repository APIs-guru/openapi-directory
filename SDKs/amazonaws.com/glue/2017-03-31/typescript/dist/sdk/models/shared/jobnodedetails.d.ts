import { SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";
/**
 * The details of a Job node present in the workflow.
**/
export declare class JobNodeDetails extends SpeakeasyBase {
    jobRuns?: JobRun[];
}
