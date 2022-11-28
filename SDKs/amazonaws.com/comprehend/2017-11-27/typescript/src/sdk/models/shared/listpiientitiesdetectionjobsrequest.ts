import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PiiEntitiesDetectionJobFilter } from "./piientitiesdetectionjobfilter";



export class ListPiiEntitiesDetectionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: PiiEntitiesDetectionJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
