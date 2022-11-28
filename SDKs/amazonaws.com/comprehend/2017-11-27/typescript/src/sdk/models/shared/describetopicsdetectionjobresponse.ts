import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicsDetectionJobProperties } from "./topicsdetectionjobproperties";



export class DescribeTopicsDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TopicsDetectionJobProperties" })
  topicsDetectionJobProperties?: TopicsDetectionJobProperties;
}
