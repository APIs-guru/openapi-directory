import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineSummary } from "./pipelinesummary";


// ListPipelinesOutput
/** 
 * Represents the output of a <code>ListPipelines</code> action.
**/
export class ListPipelinesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pipelines", elemType: shared.PipelineSummary })
  pipelines?: PipelineSummary[];
}
