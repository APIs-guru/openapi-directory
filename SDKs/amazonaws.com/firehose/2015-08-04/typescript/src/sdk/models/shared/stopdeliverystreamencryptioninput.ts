import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopDeliveryStreamEncryptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;
}
