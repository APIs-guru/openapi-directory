import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SentimentDetectionJobProperties } from "./sentimentdetectionjobproperties";


export class DescribeSentimentDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SentimentDetectionJobProperties" })
  sentimentDetectionJobProperties?: SentimentDetectionJobProperties;
}
