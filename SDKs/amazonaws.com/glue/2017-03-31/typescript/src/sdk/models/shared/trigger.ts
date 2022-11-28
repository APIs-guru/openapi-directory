import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";
import { TriggerStateEnum } from "./triggerstateenum";
import { TriggerTypeEnum } from "./triggertypeenum";



// Trigger
/** 
 * Information about a specific trigger.
**/
export class Trigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventBatchingCondition" })
  eventBatchingCondition?: EventBatchingCondition;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Predicate" })
  predicate?: Predicate;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: TriggerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TriggerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkflowName" })
  workflowName?: string;
}
