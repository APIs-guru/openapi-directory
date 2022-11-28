import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectDominantLanguageItemResult } from "./batchdetectdominantlanguageitemresult";



export class BatchDetectDominantLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorList", elemType: BatchItemError })
  errorList: BatchItemError[];

  @SpeakeasyMetadata({ data: "json, name=ResultList", elemType: BatchDetectDominantLanguageItemResult })
  resultList: BatchDetectDominantLanguageItemResult[];
}
