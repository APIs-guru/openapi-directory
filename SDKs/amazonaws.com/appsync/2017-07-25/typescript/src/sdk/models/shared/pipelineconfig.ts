import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineConfig
/** 
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
export class PipelineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functions" })
  functions?: string[];
}
