import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineIdName
/** 
 * Contains the name and identifier of a pipeline.
**/
export class PipelineIdName extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
