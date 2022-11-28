import { SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";
export declare class PutRecordBatchInput extends SpeakeasyBase {
    deliveryStreamName: string;
    records: Record[];
}
