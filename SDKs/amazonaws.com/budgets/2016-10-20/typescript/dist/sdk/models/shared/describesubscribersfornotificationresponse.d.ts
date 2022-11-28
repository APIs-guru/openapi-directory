import { SpeakeasyBase } from "../../../internal/utils";
import { Subscriber } from "./subscriber";
/**
 *  Response of DescribeSubscribersForNotification
**/
export declare class DescribeSubscribersForNotificationResponse extends SpeakeasyBase {
    nextToken?: string;
    subscribers?: Subscriber[];
}
