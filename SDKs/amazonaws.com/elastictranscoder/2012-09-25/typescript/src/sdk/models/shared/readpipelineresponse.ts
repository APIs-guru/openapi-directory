import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";



// ReadPipelineResponse
/** 
 * The <code>ReadPipelineResponse</code> structure.
**/
export class ReadPipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;

  @SpeakeasyMetadata({ data: "json, name=Warnings", elemType: Warning })
  warnings?: Warning[];
}
