import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForDeliveryStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=ExclusiveStartTagKey" })
  exclusiveStartTagKey?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
