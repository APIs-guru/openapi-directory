import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * Specifies a tag for a resource.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
