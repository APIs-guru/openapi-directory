import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineIdName
/** 
 * Contains the name and identifier of a pipeline.
**/
export class PipelineIdName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
