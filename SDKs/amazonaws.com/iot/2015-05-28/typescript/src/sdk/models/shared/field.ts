import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldTypeEnum } from "./fieldtypeenum";


// Field
/** 
 * Describes the name and data type at a field.
**/
export class Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: FieldTypeEnum;
}
