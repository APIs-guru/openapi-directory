import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummaryForThing } from "./jobexecutionsummaryforthing";
export declare class ListJobExecutionsForThingResponse extends SpeakeasyBase {
    executionSummaries?: JobExecutionSummaryForThing[];
    nextToken?: string;
}
