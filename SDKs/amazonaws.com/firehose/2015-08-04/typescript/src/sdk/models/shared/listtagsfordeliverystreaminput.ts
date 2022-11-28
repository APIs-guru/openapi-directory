import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsForDeliveryStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartTagKey" })
  exclusiveStartTagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;
}
