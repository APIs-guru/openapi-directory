import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";



// PipelineObject
/** 
 * Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
**/
export class PipelineObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields: Field[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
