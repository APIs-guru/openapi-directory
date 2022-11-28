import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleRule } from "./simplerule";



// AlarmRule
/** 
 * Defines when your alarm is invoked.
**/
export class AlarmRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleRule" })
  simpleRule?: SimpleRule;
}
