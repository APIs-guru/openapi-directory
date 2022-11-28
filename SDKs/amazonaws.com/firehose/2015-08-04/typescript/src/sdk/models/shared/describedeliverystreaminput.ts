import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDeliveryStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartDestinationId" })
  exclusiveStartDestinationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;
}
