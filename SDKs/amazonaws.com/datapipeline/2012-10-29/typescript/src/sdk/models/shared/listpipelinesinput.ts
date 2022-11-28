import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListPipelinesInput
/** 
 * Contains the parameters for ListPipelines.
**/
export class ListPipelinesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=marker" })
  marker?: string;
}
