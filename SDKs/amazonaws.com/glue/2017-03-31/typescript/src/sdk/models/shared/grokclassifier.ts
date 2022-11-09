import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrokClassifier
/** 
 * A classifier that uses <code>grok</code> patterns.
**/
export class GrokClassifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classification" })
  classification: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=CustomPatterns" })
  customPatterns?: string;

  @Metadata({ data: "json, name=GrokPattern" })
  grokPattern: string;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
