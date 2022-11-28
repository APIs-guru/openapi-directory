import { SpeakeasyBase } from "../../../internal/utils";
import { RxNormTraitNameEnum } from "./rxnormtraitnameenum";
/**
 * The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication.
**/
export declare class RxNormTrait extends SpeakeasyBase {
    name?: RxNormTraitNameEnum;
    score?: number;
}
