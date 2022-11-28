import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineIdName } from "./pipelineidname";



// ListPipelinesOutput
/** 
 * Contains the output of ListPipelines.
**/
export class ListPipelinesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineIdList", elemType: PipelineIdName })
  pipelineIdList: PipelineIdName[];
}
