import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPipelineStateInput
/** 
 * Represents the input of a <code>GetPipelineState</code> action.
**/
export class GetPipelineStateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
