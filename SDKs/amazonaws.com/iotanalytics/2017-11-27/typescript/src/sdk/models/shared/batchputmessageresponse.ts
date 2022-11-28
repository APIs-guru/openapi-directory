import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPutMessageErrorEntry } from "./batchputmessageerrorentry";



export class BatchPutMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchPutMessageErrorEntries", elemType: BatchPutMessageErrorEntry })
  batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}
