import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";
import { Tag } from "./tag";


// PipelineDescription
/** 
 * Contains pipeline metadata.
**/
export class PipelineDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields: Field[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
