import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeliveryStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamARN" })
  deliveryStreamArn?: string;
}
