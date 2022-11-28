import { SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";
export declare class GetJobRunsResponse extends SpeakeasyBase {
    jobRuns?: JobRun[];
    nextToken?: string;
}
