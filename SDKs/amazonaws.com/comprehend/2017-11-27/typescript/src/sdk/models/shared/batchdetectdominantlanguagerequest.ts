import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchDetectDominantLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TextList" })
  textList: string[];
}
