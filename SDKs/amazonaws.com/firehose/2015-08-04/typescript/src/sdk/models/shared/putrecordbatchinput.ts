import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";



export class PutRecordBatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: Record })
  records: Record[];
}
