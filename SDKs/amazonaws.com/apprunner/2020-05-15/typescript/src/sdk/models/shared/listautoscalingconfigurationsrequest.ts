import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAutoScalingConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfigurationName" })
  autoScalingConfigurationName?: string;

  @Metadata({ data: "json, name=LatestOnly" })
  latestOnly?: boolean;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
