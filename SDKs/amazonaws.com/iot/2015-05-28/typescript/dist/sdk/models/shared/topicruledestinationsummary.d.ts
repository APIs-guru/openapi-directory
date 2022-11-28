import { SpeakeasyBase } from "../../../internal/utils";
import { HttpUrlDestinationSummary } from "./httpurldestinationsummary";
import { TopicRuleDestinationStatusEnum } from "./topicruledestinationstatusenum";
import { VpcDestinationSummary } from "./vpcdestinationsummary";
/**
 * Information about the topic rule destination.
**/
export declare class TopicRuleDestinationSummary extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    httpUrlSummary?: HttpUrlDestinationSummary;
    lastUpdatedAt?: Date;
    status?: TopicRuleDestinationStatusEnum;
    statusReason?: string;
    vpcDestinationSummary?: VpcDestinationSummary;
}
