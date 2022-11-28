import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operator } from "./operator";



// Selector
/** 
 * A comparision that is used to determine whether a query should return this object.
**/
export class Selector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: Operator;
}
