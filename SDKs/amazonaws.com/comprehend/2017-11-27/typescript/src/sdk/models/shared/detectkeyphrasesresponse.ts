import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyPhrase } from "./keyphrase";


export class DetectKeyPhrasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyPhrases", elemType: shared.KeyPhrase })
  keyPhrases?: KeyPhrase[];
}
