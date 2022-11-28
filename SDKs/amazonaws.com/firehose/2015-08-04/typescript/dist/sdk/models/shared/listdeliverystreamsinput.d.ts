import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";
export declare class ListDeliveryStreamsInput extends SpeakeasyBase {
    deliveryStreamType?: DeliveryStreamTypeEnum;
    exclusiveStartDeliveryStreamName?: string;
    limit?: number;
}
