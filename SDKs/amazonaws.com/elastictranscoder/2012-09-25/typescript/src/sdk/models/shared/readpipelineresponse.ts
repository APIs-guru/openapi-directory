import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";


// ReadPipelineResponse
/** 
 * The <code>ReadPipelineResponse</code> structure.
**/
export class ReadPipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;

  @Metadata({ data: "json, name=Warnings", elemType: shared.Warning })
  warnings?: Warning[];
}
