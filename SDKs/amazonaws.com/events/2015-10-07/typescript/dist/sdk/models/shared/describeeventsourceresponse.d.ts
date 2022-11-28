import { SpeakeasyBase } from "../../../internal/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";
export declare class DescribeEventSourceResponse extends SpeakeasyBase {
    arn?: string;
    createdBy?: string;
    creationTime?: Date;
    expirationTime?: Date;
    name?: string;
    state?: EventSourceStateEnum;
}
