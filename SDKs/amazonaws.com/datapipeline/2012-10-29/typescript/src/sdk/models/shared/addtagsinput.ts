import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// AddTagsInput
/** 
 * Contains the parameters for AddTags.
**/
export class AddTagsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];
}
