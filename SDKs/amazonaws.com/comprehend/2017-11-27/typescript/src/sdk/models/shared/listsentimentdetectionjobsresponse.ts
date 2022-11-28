import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SentimentDetectionJobProperties } from "./sentimentdetectionjobproperties";



export class ListSentimentDetectionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SentimentDetectionJobPropertiesList", elemType: SentimentDetectionJobProperties })
  sentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];
}
