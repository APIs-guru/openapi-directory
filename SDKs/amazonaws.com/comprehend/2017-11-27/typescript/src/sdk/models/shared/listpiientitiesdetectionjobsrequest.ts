import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntitiesDetectionJobFilter } from "./piientitiesdetectionjobfilter";


export class ListPiiEntitiesDetectionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: PiiEntitiesDetectionJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
