import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";
import { TriggerTypeEnum } from "./triggertypeenum";


export class CreateTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions", elemType: shared.Action })
  actions: Action[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventBatchingCondition" })
  eventBatchingCondition?: EventBatchingCondition;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Predicate" })
  predicate?: Predicate;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=StartOnCreation" })
  startOnCreation?: boolean;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Type" })
  type: TriggerTypeEnum;

  @Metadata({ data: "json, name=WorkflowName" })
  workflowName?: string;
}
