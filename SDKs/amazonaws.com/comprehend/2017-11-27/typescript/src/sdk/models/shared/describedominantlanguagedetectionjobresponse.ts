import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DominantLanguageDetectionJobProperties } from "./dominantlanguagedetectionjobproperties";


export class DescribeDominantLanguageDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DominantLanguageDetectionJobProperties" })
  dominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
}
