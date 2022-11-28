import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpUrlDestinationSummary } from "./httpurldestinationsummary";
import { TopicRuleDestinationStatusEnum } from "./topicruledestinationstatusenum";
import { VpcDestinationSummary } from "./vpcdestinationsummary";



// TopicRuleDestinationSummary
/** 
 * Information about the topic rule destination.
**/
export class TopicRuleDestinationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=httpUrlSummary" })
  httpUrlSummary?: HttpUrlDestinationSummary;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TopicRuleDestinationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcDestinationSummary" })
  vpcDestinationSummary?: VpcDestinationSummary;
}
