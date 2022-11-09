import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DominantLanguageDetectionJobProperties } from "./dominantlanguagedetectionjobproperties";


export class ListDominantLanguageDetectionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DominantLanguageDetectionJobPropertiesList", elemType: shared.DominantLanguageDetectionJobProperties })
  dominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
