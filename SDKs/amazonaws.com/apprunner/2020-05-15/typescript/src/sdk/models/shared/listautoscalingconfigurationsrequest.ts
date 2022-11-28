import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAutoScalingConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationName" })
  autoScalingConfigurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestOnly" })
  latestOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
