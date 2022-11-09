import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetRecommendationError } from "./getrecommendationerror";
import { VolumeRecommendation } from "./volumerecommendation";


export class GetEbsVolumeRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.GetRecommendationError })
  errors?: GetRecommendationError[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=volumeRecommendations", elemType: shared.VolumeRecommendation })
  volumeRecommendations?: VolumeRecommendation[];
}
