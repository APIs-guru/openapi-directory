import { SpeakeasyBase } from "../../../internal/utils";
import { BatchWriteResponse } from "./batchwriteresponse";
import { WriteRequest } from "./writerequest";
/**
 * A container for <code>BatchWriteItem</code> response
**/
export declare class BatchWriteItemOutput extends SpeakeasyBase {
    responses?: Map<string, BatchWriteResponse>;
    unprocessedItems?: Map<string, WriteRequest[]>;
}
