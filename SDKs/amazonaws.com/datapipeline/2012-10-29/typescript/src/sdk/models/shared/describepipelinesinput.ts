import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribePipelinesInput
/** 
 * Contains the parameters for DescribePipelines.
**/
export class DescribePipelinesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineIds" })
  pipelineIds: string[];
}
