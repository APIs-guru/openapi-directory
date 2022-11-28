import { SpeakeasyBase } from "../../../internal/utils";
import { HttpUrlDestinationProperties } from "./httpurldestinationproperties";
import { TopicRuleDestinationStatusEnum } from "./topicruledestinationstatusenum";
import { VpcDestinationProperties } from "./vpcdestinationproperties";
/**
 * A topic rule destination.
**/
export declare class TopicRuleDestination extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    httpUrlProperties?: HttpUrlDestinationProperties;
    lastUpdatedAt?: Date;
    status?: TopicRuleDestinationStatusEnum;
    statusReason?: string;
    vpcProperties?: VpcDestinationProperties;
}
