import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";
/**
 * <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>
**/
export declare class Subscriber extends SpeakeasyBase {
    address: string;
    subscriptionType: SubscriptionTypeEnum;
}
