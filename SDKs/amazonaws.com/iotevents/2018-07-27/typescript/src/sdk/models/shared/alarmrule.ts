import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleRule } from "./simplerule";


// AlarmRule
/** 
 * Defines when your alarm is invoked.
**/
export class AlarmRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleRule" })
  simpleRule?: SimpleRule;
}
