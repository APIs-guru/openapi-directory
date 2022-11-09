import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RxNormEntity } from "./rxnormentity";
export declare class InferRxNormResponse extends SpeakeasyBase {
    entities: RxNormEntity[];
    modelVersion?: string;
    paginationToken?: string;
}
