import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RxNormTraitNameEnum } from "./rxnormtraitnameenum";


// RxNormTrait
/** 
 * The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication. 
**/
export class RxNormTrait extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: RxNormTraitNameEnum;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}
