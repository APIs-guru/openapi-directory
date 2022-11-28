import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
export declare class UpdateBudgetActionResponse extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    newAction: Action;
    oldAction: Action;
}
