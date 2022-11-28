import { SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";
/**
 *  Request of UpdateBudget
**/
export declare class UpdateBudgetRequest extends SpeakeasyBase {
    accountId: string;
    newBudget: Budget;
}
