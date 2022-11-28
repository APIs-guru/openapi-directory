import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPhrase } from "./keyphrase";



export class DetectKeyPhrasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyPhrases", elemType: KeyPhrase })
  keyPhrases?: KeyPhrase[];
}
