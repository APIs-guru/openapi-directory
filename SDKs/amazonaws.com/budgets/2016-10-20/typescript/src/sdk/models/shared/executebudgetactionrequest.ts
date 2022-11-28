import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTypeEnum } from "./executiontypeenum";



export class ExecuteBudgetActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ActionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionType" })
  executionType: ExecutionTypeEnum;
}
