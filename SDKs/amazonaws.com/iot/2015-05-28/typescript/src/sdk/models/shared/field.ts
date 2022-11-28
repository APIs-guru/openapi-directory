import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldTypeEnum } from "./fieldtypeenum";



// Field
/** 
 * Describes the name and data type at a field.
**/
export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FieldTypeEnum;
}
