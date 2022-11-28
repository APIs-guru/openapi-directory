import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitiesDetectionJobFilter } from "./entitiesdetectionjobfilter";



export class ListEntitiesDetectionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: EntitiesDetectionJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
