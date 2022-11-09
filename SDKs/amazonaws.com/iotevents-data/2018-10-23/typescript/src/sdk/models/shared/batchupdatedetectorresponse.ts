import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchUpdateDetectorErrorEntry } from "./batchupdatedetectorerrorentry";


export class BatchUpdateDetectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchUpdateDetectorErrorEntries", elemType: shared.BatchUpdateDetectorErrorEntry })
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];
}
