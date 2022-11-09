import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPhrasesDetectionJobProperties } from "./keyphrasesdetectionjobproperties";


export class DescribeKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyPhrasesDetectionJobProperties" })
  keyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
}
