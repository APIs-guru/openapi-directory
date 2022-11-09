import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FieldInfo
/** 
 * Details about the fields such as name of the field.
**/
export class FieldInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
