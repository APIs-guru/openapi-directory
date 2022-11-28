import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpUrlDestinationProperties } from "./httpurldestinationproperties";
import { TopicRuleDestinationStatusEnum } from "./topicruledestinationstatusenum";
import { VpcDestinationProperties } from "./vpcdestinationproperties";



// TopicRuleDestination
/** 
 * A topic rule destination.
**/
export class TopicRuleDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=httpUrlProperties" })
  httpUrlProperties?: HttpUrlDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TopicRuleDestinationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcProperties" })
  vpcProperties?: VpcDestinationProperties;
}
