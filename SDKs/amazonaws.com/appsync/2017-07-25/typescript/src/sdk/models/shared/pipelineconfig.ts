import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineConfig
/** 
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
export class PipelineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=functions" })
  functions?: string[];
}
