import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Icd10CmTraitNameEnum } from "./icd10cmtraitnameenum";



// Icd10CmTrait
/** 
 * Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.
**/
export class Icd10CmTrait extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: Icd10CmTraitNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
