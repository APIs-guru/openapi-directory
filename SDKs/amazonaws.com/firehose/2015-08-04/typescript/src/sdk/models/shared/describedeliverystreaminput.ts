import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDeliveryStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=ExclusiveStartDestinationId" })
  exclusiveStartDestinationId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
