import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPipelineInput
/** 
 * Represents the input of a <code>GetPipeline</code> action.
**/
export class GetPipelineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
