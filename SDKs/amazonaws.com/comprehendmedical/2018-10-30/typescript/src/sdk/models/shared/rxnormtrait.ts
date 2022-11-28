import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RxNormTraitNameEnum } from "./rxnormtraitnameenum";



// RxNormTrait
/** 
 * The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication. 
**/
export class RxNormTrait extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: RxNormTraitNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
