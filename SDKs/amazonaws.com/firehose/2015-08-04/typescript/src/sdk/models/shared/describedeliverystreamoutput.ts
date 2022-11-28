import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamDescription } from "./deliverystreamdescription";



export class DescribeDeliveryStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamDescription" })
  deliveryStreamDescription: DeliveryStreamDescription;
}
