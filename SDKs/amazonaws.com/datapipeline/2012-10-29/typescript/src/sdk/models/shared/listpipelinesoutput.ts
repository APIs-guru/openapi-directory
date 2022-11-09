import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineIdName } from "./pipelineidname";


// ListPipelinesOutput
/** 
 * Contains the output of ListPipelines.
**/
export class ListPipelinesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @Metadata({ data: "json, name=marker" })
  marker?: string;

  @Metadata({ data: "json, name=pipelineIdList", elemType: shared.PipelineIdName })
  pipelineIdList: PipelineIdName[];
}
