import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagDeliveryStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
