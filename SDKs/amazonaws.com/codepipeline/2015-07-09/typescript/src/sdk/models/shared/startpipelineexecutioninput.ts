import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartPipelineExecutionInput
/** 
 * Represents the input of a <code>StartPipelineExecution</code> action.
**/
export class StartPipelineExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
