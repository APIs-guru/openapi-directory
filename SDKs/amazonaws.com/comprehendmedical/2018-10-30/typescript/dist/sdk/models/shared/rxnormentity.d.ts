import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RxNormAttribute } from "./rxnormattribute";
import { RxNormEntityCategoryEnum } from "./rxnormentitycategoryenum";
import { RxNormConcept } from "./rxnormconcept";
import { RxNormTrait } from "./rxnormtrait";
import { RxNormEntityTypeEnum } from "./rxnormentitytypeenum";
/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
**/
export declare class RxNormEntity extends SpeakeasyBase {
    attributes?: RxNormAttribute[];
    beginOffset?: number;
    category?: RxNormEntityCategoryEnum;
    endOffset?: number;
    id?: number;
    rxNormConcepts?: RxNormConcept[];
    score?: number;
    text?: string;
    traits?: RxNormTrait[];
    type?: RxNormEntityTypeEnum;
}
