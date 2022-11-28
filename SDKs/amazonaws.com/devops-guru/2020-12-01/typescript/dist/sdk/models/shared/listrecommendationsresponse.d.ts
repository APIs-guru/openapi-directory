import { SpeakeasyBase } from "../../../internal/utils";
import { Recommendation } from "./recommendation";
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendations?: Recommendation[];
}
