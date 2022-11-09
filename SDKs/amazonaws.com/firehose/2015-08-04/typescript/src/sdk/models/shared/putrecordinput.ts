import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Record } from "./record";


export class PutRecordInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=Record" })
  record: Record;
}
