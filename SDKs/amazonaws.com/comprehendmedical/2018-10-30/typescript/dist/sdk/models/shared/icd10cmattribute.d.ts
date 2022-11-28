import { SpeakeasyBase } from "../../../internal/utils";
import { Icd10CmEntityTypeEnum } from "./icd10cmentitytypeenum";
import { Icd10CmRelationshipTypeEnum } from "./icd10cmrelationshiptypeenum";
import { Icd10CmTrait } from "./icd10cmtrait";
import { Icd10CmAttributeTypeEnum } from "./icd10cmattributetypeenum";
/**
 * The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
**/
export declare class Icd10CmAttribute extends SpeakeasyBase {
    beginOffset?: number;
    category?: Icd10CmEntityTypeEnum;
    endOffset?: number;
    id?: number;
    relationshipScore?: number;
    relationshipType?: Icd10CmRelationshipTypeEnum;
    score?: number;
    text?: string;
    traits?: Icd10CmTrait[];
    type?: Icd10CmAttributeTypeEnum;
}
