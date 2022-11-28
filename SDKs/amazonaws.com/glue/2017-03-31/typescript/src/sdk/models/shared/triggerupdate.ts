import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";



// TriggerUpdate
/** 
 * A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
**/
export class TriggerUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventBatchingCondition" })
  eventBatchingCondition?: EventBatchingCondition;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Predicate" })
  predicate?: Predicate;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: string;
}
