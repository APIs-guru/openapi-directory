import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummaryForThing } from "./jobexecutionsummaryforthing";



export class ListJobExecutionsForThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionSummaries", elemType: JobExecutionSummaryForThing })
  executionSummaries?: JobExecutionSummaryForThing[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
