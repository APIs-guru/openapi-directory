import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineSummary } from "./pipelinesummary";



// ListPipelinesOutput
/** 
 * Represents the output of a <code>ListPipelines</code> action.
**/
export class ListPipelinesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelines", elemType: PipelineSummary })
  pipelines?: PipelineSummary[];
}
