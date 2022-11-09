import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagDeliveryStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
