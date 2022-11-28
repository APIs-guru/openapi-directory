import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPhrasesDetectionJobProperties } from "./keyphrasesdetectionjobproperties";



export class DescribeKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyPhrasesDetectionJobProperties" })
  keyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
}
