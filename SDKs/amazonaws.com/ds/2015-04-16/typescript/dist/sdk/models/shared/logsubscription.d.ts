import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.
**/
export declare class LogSubscription extends SpeakeasyBase {
    directoryId?: string;
    logGroupName?: string;
    subscriptionCreatedDateTime?: Date;
}
