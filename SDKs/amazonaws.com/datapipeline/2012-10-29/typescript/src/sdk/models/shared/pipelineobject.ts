import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";


// PipelineObject
/** 
 * Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
**/
export class PipelineObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields: Field[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
