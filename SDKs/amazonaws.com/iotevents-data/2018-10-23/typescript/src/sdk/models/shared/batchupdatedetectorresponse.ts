import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchUpdateDetectorErrorEntry } from "./batchupdatedetectorerrorentry";



export class BatchUpdateDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchUpdateDetectorErrorEntries", elemType: BatchUpdateDetectorErrorEntry })
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];
}
