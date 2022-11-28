import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineSummary } from "./pipelinesummary";



export class ListPipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineSummaries", elemType: PipelineSummary })
  pipelineSummaries?: PipelineSummary[];
}
