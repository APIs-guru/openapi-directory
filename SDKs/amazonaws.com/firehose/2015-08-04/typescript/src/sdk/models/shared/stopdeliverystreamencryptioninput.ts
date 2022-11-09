import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopDeliveryStreamEncryptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;
}
