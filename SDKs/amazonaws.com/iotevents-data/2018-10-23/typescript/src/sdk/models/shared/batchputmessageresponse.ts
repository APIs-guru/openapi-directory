import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPutMessageErrorEntry } from "./batchputmessageerrorentry";



export class BatchPutMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchPutMessageErrorEntries", elemType: BatchPutMessageErrorEntry })
  batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}
