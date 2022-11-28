import { SpeakeasyBase } from "../../../internal/utils";
import { SpotInstanceStateFault } from "./spotinstancestatefault";
import { DatafeedSubscriptionStateEnum } from "./datafeedsubscriptionstateenum";
/**
 * Describes the data feed for a Spot Instance.
**/
export declare class SpotDatafeedSubscription extends SpeakeasyBase {
    bucket?: string;
    fault?: SpotInstanceStateFault;
    ownerId?: string;
    prefix?: string;
    state?: DatafeedSubscriptionStateEnum;
}
