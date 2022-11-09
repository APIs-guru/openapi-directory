import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.
**/
export declare class Icd10CmConcept extends SpeakeasyBase {
    code?: string;
    description?: string;
    score?: number;
}
