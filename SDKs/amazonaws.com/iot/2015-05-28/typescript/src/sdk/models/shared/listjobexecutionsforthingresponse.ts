import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobExecutionSummaryForThing } from "./jobexecutionsummaryforthing";


export class ListJobExecutionsForThingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionSummaries", elemType: shared.JobExecutionSummaryForThing })
  executionSummaries?: JobExecutionSummaryForThing[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
