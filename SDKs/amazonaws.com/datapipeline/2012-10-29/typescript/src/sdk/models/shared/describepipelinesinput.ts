import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribePipelinesInput
/** 
 * Contains the parameters for DescribePipelines.
**/
export class DescribePipelinesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineIds" })
  pipelineIds: string[];
}
