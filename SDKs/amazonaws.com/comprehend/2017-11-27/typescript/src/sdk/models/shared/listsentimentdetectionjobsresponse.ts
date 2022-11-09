import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SentimentDetectionJobProperties } from "./sentimentdetectionjobproperties";


export class ListSentimentDetectionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SentimentDetectionJobPropertiesList", elemType: shared.SentimentDetectionJobProperties })
  sentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];
}
