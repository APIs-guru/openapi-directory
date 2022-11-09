import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpUrlDestinationSummary } from "./httpurldestinationsummary";
import { TopicRuleDestinationStatusEnum } from "./topicruledestinationstatusenum";
import { VpcDestinationSummary } from "./vpcdestinationsummary";


// TopicRuleDestinationSummary
/** 
 * Information about the topic rule destination.
**/
export class TopicRuleDestinationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=httpUrlSummary" })
  httpUrlSummary?: HttpUrlDestinationSummary;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: TopicRuleDestinationStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=vpcDestinationSummary" })
  vpcDestinationSummary?: VpcDestinationSummary;
}
