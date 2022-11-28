import { SpeakeasyBase } from "../../../internal/utils";
import { GetRecommendationError } from "./getrecommendationerror";
import { VolumeRecommendation } from "./volumerecommendation";
export declare class GetEbsVolumeRecommendationsResponse extends SpeakeasyBase {
    errors?: GetRecommendationError[];
    nextToken?: string;
    volumeRecommendations?: VolumeRecommendation[];
}
