import { SpeakeasyBase } from "../../../internal/utils";
import { Icd10CmEntity } from "./icd10cmentity";
export declare class InferIcd10CmResponse extends SpeakeasyBase {
    entities: Icd10CmEntity[];
    modelVersion?: string;
    paginationToken?: string;
}
