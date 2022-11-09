import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 *  A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"} 
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
