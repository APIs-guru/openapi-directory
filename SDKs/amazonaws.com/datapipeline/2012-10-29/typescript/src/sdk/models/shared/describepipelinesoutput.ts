import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineDescription } from "./pipelinedescription";


// DescribePipelinesOutput
/** 
 * Contains the output of DescribePipelines.
**/
export class DescribePipelinesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineDescriptionList", elemType: shared.PipelineDescription })
  pipelineDescriptionList: PipelineDescription[];
}
