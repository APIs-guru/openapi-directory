import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
export declare class DescribeBudgetActionsForAccountResponse extends SpeakeasyBase {
    actions: Action[];
    nextToken?: string;
}
