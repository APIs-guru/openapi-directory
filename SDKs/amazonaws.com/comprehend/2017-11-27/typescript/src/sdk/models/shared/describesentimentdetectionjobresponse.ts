import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SentimentDetectionJobProperties } from "./sentimentdetectionjobproperties";



export class DescribeSentimentDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SentimentDetectionJobProperties" })
  sentimentDetectionJobProperties?: SentimentDetectionJobProperties;
}
