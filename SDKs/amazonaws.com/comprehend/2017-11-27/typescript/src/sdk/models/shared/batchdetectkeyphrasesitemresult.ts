import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyPhrase } from "./keyphrase";


// BatchDetectKeyPhrasesItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectKeyPhrasesItemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Index" })
  index?: number;

  @Metadata({ data: "json, name=KeyPhrases", elemType: shared.KeyPhrase })
  keyPhrases?: KeyPhrase[];
}
