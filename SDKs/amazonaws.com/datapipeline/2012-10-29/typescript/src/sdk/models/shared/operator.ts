import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatorTypeEnum } from "./operatortypeenum";



// Operator
/** 
 * Contains a logical operation for comparing the value of a field with a specified value.
**/
export class Operator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OperatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
