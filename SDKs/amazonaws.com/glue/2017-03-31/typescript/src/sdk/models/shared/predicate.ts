import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { LogicalEnum } from "./logicalenum";



// Predicate
/** 
 * Defines the predicate of the trigger, which determines when it fires.
**/
export class Predicate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Conditions", elemType: Condition })
  conditions?: Condition[];

  @SpeakeasyMetadata({ data: "json, name=Logical" })
  logical?: LogicalEnum;
}
