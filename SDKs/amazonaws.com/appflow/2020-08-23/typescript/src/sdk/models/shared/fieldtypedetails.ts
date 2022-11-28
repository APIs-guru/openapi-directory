import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatorEnum } from "./operatorenum";



// FieldTypeDetails
/** 
 *  Contains details regarding the supported field type and the operators that can be applied for filtering. 
**/
export class FieldTypeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldType" })
  fieldType: string;

  @SpeakeasyMetadata({ data: "json, name=filterOperators" })
  filterOperators: OperatorEnum[];

  @SpeakeasyMetadata({ data: "json, name=supportedValues" })
  supportedValues?: string[];
}
