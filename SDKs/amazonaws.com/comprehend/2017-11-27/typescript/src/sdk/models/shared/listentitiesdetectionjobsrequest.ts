import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitiesDetectionJobFilter } from "./entitiesdetectionjobfilter";


export class ListEntitiesDetectionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: EntitiesDetectionJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
