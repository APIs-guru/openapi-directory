import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operator } from "./operator";


// Selector
/** 
 * A comparision that is used to determine whether a query should return this object.
**/
export class Selector extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: Operator;
}
