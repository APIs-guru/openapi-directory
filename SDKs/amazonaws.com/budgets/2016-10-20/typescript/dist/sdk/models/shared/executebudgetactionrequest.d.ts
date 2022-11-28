import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTypeEnum } from "./executiontypeenum";
export declare class ExecuteBudgetActionRequest extends SpeakeasyBase {
    accountId: string;
    actionId: string;
    budgetName: string;
    executionType: ExecutionTypeEnum;
}
