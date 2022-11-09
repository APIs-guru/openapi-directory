import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDeliveryStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowForceDelete" })
  allowForceDelete?: boolean;

  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;
}
