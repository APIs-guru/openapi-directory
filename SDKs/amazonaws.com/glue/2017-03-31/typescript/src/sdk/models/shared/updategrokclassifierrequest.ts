import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateGrokClassifierRequest
/** 
 * Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.
**/
export class UpdateGrokClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classification" })
  classification?: string;

  @Metadata({ data: "json, name=CustomPatterns" })
  customPatterns?: string;

  @Metadata({ data: "json, name=GrokPattern" })
  grokPattern?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
