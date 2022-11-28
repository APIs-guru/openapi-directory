import { SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";
export declare class ListJobRunsResponse extends SpeakeasyBase {
    jobRuns?: JobRun[];
    nextToken?: string;
}
