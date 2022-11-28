import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPhrasesDetectionJobProperties } from "./keyphrasesdetectionjobproperties";



export class ListKeyPhrasesDetectionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyPhrasesDetectionJobPropertiesList", elemType: KeyPhrasesDetectionJobProperties })
  keyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
