import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
