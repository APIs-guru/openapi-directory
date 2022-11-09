import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatorTypeEnum } from "./operatortypeenum";


// Operator
/** 
 * Contains a logical operation for comparing the value of a field with a specified value.
**/
export class Operator extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: OperatorTypeEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
