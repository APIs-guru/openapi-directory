import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Icd10CmAttribute } from "./icd10cmattribute";
import { Icd10CmEntityCategoryEnum } from "./icd10cmentitycategoryenum";
import { Icd10CmConcept } from "./icd10cmconcept";
import { Icd10CmTrait } from "./icd10cmtrait";
import { Icd10CmEntityTypeEnum } from "./icd10cmentitytypeenum";
/**
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
**/
export declare class Icd10CmEntity extends SpeakeasyBase {
    attributes?: Icd10CmAttribute[];
    beginOffset?: number;
    category?: Icd10CmEntityCategoryEnum;
    endOffset?: number;
    icd10CmConcepts?: Icd10CmConcept[];
    id?: number;
    score?: number;
    text?: string;
    traits?: Icd10CmTrait[];
    type?: Icd10CmEntityTypeEnum;
}
