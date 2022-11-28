import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateGrokClassifierRequest
/** 
 * Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
**/
export class CreateGrokClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=CustomPatterns" })
  customPatterns?: string;

  @SpeakeasyMetadata({ data: "json, name=GrokPattern" })
  grokPattern: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
