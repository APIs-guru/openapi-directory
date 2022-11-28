import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrokClassifier
/** 
 * A classifier that uses <code>grok</code> patterns.
**/
export class GrokClassifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CustomPatterns" })
  customPatterns?: string;

  @SpeakeasyMetadata({ data: "json, name=GrokPattern" })
  grokPattern: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
