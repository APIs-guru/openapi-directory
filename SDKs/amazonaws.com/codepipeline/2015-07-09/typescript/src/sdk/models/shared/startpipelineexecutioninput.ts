import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartPipelineExecutionInput
/** 
 * Represents the input of a <code>StartPipelineExecution</code> action.
**/
export class StartPipelineExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
