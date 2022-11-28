import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRetentionConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionConfigurationNames" })
  retentionConfigurationNames?: string[];
}
