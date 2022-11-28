import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectKeyPhrasesItemResult } from "./batchdetectkeyphrasesitemresult";



export class BatchDetectKeyPhrasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorList", elemType: BatchItemError })
  errorList: BatchItemError[];

  @SpeakeasyMetadata({ data: "json, name=ResultList", elemType: BatchDetectKeyPhrasesItemResult })
  resultList: BatchDetectKeyPhrasesItemResult[];
}
