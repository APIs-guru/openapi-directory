import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FieldInfo
/** 
 * Details about the fields such as name of the field.
**/
export class FieldInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
