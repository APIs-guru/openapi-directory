import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateGrokClassifierRequest
/** 
 * Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
**/
export class CreateGrokClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classification" })
  classification: string;

  @Metadata({ data: "json, name=CustomPatterns" })
  customPatterns?: string;

  @Metadata({ data: "json, name=GrokPattern" })
  grokPattern: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
