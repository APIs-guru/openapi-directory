import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchWriteResponse } from "./batchwriteresponse";
import { WriteRequest } from "./writerequest";


// BatchWriteItemOutput
/** 
 * A container for <code>BatchWriteItem</code> response
**/
export class BatchWriteItemOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Responses", elemType: shared.BatchWriteResponse })
  responses?: Map<string, BatchWriteResponse>;

  @Metadata({ data: "json, name=UnprocessedItems", elemType: shared.WriteRequest, elemDepth: 2 })
  unprocessedItems?: Map<string, WriteRequest[]>;
}
