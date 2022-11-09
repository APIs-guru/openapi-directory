import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionTypeEnum } from "./executiontypeenum";


export class ExecuteBudgetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=ActionId" })
  actionId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=ExecutionType" })
  executionType: ExecutionTypeEnum;
}
