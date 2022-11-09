import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";


// TriggerUpdate
/** 
 * A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
**/
export class TriggerUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventBatchingCondition" })
  eventBatchingCondition?: EventBatchingCondition;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Predicate" })
  predicate?: Predicate;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: string;
}
