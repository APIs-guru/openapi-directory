import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetRecommendationError } from "./getrecommendationerror";
import { VolumeRecommendation } from "./volumerecommendation";



export class GetEbsVolumeRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetRecommendationError })
  errors?: GetRecommendationError[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeRecommendations", elemType: VolumeRecommendation })
  volumeRecommendations?: VolumeRecommendation[];
}
