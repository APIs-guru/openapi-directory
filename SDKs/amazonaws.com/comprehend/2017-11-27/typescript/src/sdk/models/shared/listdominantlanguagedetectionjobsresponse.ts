import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DominantLanguageDetectionJobProperties } from "./dominantlanguagedetectionjobproperties";



export class ListDominantLanguageDetectionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DominantLanguageDetectionJobPropertiesList", elemType: DominantLanguageDetectionJobProperties })
  dominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
