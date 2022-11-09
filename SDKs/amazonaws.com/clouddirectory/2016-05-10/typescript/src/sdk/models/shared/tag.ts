import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * The tag structure that contains a tag key and value.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
