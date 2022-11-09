import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineSummary } from "./pipelinesummary";


export class ListPipelinesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pipelineSummaries", elemType: shared.PipelineSummary })
  pipelineSummaries?: PipelineSummary[];
}
