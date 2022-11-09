import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryStreamDescription } from "./deliverystreamdescription";


export class DescribeDeliveryStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamDescription" })
  deliveryStreamDescription: DeliveryStreamDescription;
}
