import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";


export class ListDeliveryStreamsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamType" })
  deliveryStreamType?: DeliveryStreamTypeEnum;

  @Metadata({ data: "json, name=ExclusiveStartDeliveryStreamName" })
  exclusiveStartDeliveryStreamName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
