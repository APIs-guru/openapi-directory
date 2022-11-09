import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPipelineStateInput
/** 
 * Represents the input of a <code>GetPipelineState</code> action.
**/
export class GetPipelineStateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
