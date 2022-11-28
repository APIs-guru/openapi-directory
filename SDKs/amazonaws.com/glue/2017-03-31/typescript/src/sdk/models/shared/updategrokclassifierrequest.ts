import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateGrokClassifierRequest
/** 
 * Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.
**/
export class UpdateGrokClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomPatterns" })
  customPatterns?: string;

  @SpeakeasyMetadata({ data: "json, name=GrokPattern" })
  grokPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
