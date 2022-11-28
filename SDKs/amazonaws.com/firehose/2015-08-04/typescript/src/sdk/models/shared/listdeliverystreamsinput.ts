import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";



export class ListDeliveryStreamsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamType" })
  deliveryStreamType?: DeliveryStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartDeliveryStreamName" })
  exclusiveStartDeliveryStreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;
}
