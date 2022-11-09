import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Condition } from "./condition";
import { LogicalEnum } from "./logicalenum";


// Predicate
/** 
 * Defines the predicate of the trigger, which determines when it fires.
**/
export class Predicate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Conditions", elemType: shared.Condition })
  conditions?: Condition[];

  @Metadata({ data: "json, name=Logical" })
  logical?: LogicalEnum;
}
