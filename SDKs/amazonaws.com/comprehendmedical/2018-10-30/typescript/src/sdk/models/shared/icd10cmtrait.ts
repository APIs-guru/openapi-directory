import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Icd10CmTraitNameEnum } from "./icd10cmtraitnameenum";


// Icd10CmTrait
/** 
 * Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.
**/
export class Icd10CmTrait extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: Icd10CmTraitNameEnum;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}
