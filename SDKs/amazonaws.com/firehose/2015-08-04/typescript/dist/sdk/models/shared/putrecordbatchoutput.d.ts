import { SpeakeasyBase } from "../../../internal/utils";
import { PutRecordBatchResponseEntry } from "./putrecordbatchresponseentry";
export declare class PutRecordBatchOutput extends SpeakeasyBase {
    encrypted?: boolean;
    failedPutCount: number;
    requestResponses: PutRecordBatchResponseEntry[];
}
