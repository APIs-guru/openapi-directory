import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 *  Response of GetNotificationsForBudget
**/
export declare class DescribeNotificationsForBudgetResponse extends SpeakeasyBase {
    nextToken?: string;
    notifications?: Notification[];
}
