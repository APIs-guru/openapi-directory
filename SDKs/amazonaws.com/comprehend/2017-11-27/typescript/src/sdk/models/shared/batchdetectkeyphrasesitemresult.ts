import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPhrase } from "./keyphrase";



// BatchDetectKeyPhrasesItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectKeyPhrasesItemResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=KeyPhrases", elemType: KeyPhrase })
  keyPhrases?: KeyPhrase[];
}
