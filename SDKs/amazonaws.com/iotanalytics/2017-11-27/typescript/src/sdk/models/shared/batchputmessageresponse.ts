import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPutMessageErrorEntry } from "./batchputmessageerrorentry";


export class BatchPutMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchPutMessageErrorEntries", elemType: shared.BatchPutMessageErrorEntry })
  batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}
