import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicsDetectionJobProperties } from "./topicsdetectionjobproperties";



export class ListTopicsDetectionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TopicsDetectionJobPropertiesList", elemType: TopicsDetectionJobProperties })
  topicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];
}
