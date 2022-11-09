import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatorEnum } from "./operatorenum";


// FieldTypeDetails
/** 
 *  Contains details regarding the supported field type and the operators that can be applied for filtering. 
**/
export class FieldTypeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldType" })
  fieldType: string;

  @Metadata({ data: "json, name=filterOperators" })
  filterOperators: OperatorEnum[];

  @Metadata({ data: "json, name=supportedValues" })
  supportedValues?: string[];
}
