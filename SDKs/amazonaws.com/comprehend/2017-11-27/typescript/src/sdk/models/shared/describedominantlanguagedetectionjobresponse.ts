import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DominantLanguageDetectionJobProperties } from "./dominantlanguagedetectionjobproperties";



export class DescribeDominantLanguageDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DominantLanguageDetectionJobProperties" })
  dominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
}
