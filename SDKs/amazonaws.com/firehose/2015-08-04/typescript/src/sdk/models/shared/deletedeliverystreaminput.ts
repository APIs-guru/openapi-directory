import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDeliveryStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowForceDelete" })
  allowForceDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;
}
