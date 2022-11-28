import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchWriteResponse } from "./batchwriteresponse";
import { WriteRequest } from "./writerequest";



// BatchWriteItemOutput
/** 
 * A container for <code>BatchWriteItem</code> response
**/
export class BatchWriteItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: BatchWriteResponse })
  responses?: Map<string, BatchWriteResponse>;

  @SpeakeasyMetadata({ data: "json, name=UnprocessedItems", elemType: WriteRequest, elemDepth: 2 })
  unprocessedItems?: Map<string, WriteRequest[]>;
}
