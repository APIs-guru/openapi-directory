import { SpeakeasyBase } from "../../../internal/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";
/**
 * The Amazon Web Services account that a partner event source has been offered to.
**/
export declare class PartnerEventSourceAccount extends SpeakeasyBase {
    account?: string;
    creationTime?: Date;
    expirationTime?: Date;
    state?: EventSourceStateEnum;
}
