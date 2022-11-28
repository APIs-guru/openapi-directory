import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineDescription } from "./pipelinedescription";



// DescribePipelinesOutput
/** 
 * Contains the output of DescribePipelines.
**/
export class DescribePipelinesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineDescriptionList", elemType: PipelineDescription })
  pipelineDescriptionList: PipelineDescription[];
}
