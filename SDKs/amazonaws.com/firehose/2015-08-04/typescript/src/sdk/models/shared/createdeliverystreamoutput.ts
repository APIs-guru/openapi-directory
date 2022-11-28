import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeliveryStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamARN" })
  deliveryStreamArn?: string;
}
