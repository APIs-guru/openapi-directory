import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// CreateEventSubscriptionMessage
/** 
 * <p/>
**/
export class CreateEventSubscriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceIds" })
  sourceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionName" })
  subscriptionName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
