import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TopicsDetectionJobProperties } from "./topicsdetectionjobproperties";


export class ListTopicsDetectionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TopicsDetectionJobPropertiesList", elemType: shared.TopicsDetectionJobProperties })
  topicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];
}
