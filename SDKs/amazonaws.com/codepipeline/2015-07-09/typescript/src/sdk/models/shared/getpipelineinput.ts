import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPipelineInput
/** 
 * Represents the input of a <code>GetPipeline</code> action.
**/
export class GetPipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
