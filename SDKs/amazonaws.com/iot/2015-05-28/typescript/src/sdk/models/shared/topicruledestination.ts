import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpUrlDestinationProperties } from "./httpurldestinationproperties";
import { TopicRuleDestinationStatusEnum } from "./topicruledestinationstatusenum";
import { VpcDestinationProperties } from "./vpcdestinationproperties";


// TopicRuleDestination
/** 
 * A topic rule destination.
**/
export class TopicRuleDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=httpUrlProperties" })
  httpUrlProperties?: HttpUrlDestinationProperties;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: TopicRuleDestinationStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=vpcProperties" })
  vpcProperties?: VpcDestinationProperties;
}
