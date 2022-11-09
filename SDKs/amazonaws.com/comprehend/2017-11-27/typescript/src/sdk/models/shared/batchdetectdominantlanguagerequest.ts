import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchDetectDominantLanguageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TextList" })
  textList: string[];
}
