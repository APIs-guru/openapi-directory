import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListPipelinesInput
/** 
 * Contains the parameters for ListPipelines.
**/
export class ListPipelinesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=marker" })
  marker?: string;
}
