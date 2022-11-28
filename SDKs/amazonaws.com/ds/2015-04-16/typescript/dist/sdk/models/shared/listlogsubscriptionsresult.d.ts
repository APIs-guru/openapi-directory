import { SpeakeasyBase } from "../../../internal/utils";
import { LogSubscription } from "./logsubscription";
export declare class ListLogSubscriptionsResult extends SpeakeasyBase {
    logSubscriptions?: LogSubscription[];
    nextToken?: string;
}
