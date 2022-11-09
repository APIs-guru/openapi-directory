import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// CreateEventSubscriptionMessage
/** 
 * <p/>
**/
export class CreateEventSubscriptionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn: string;

  @Metadata({ data: "json, name=SourceIds" })
  sourceIds?: string[];

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=SubscriptionName" })
  subscriptionName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
