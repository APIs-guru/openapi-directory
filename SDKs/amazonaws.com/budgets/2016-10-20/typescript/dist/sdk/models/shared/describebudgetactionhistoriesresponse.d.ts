import { SpeakeasyBase } from "../../../internal/utils";
import { ActionHistory } from "./actionhistory";
export declare class DescribeBudgetActionHistoriesResponse extends SpeakeasyBase {
    actionHistories: ActionHistory[];
    nextToken?: string;
}
