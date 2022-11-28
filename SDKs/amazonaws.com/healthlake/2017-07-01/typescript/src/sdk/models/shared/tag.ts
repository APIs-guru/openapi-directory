import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 *  A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"} 
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
