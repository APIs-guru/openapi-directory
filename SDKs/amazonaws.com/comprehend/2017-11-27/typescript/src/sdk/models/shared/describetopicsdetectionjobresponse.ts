import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TopicsDetectionJobProperties } from "./topicsdetectionjobproperties";


export class DescribeTopicsDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TopicsDetectionJobProperties" })
  topicsDetectionJobProperties?: TopicsDetectionJobProperties;
}
