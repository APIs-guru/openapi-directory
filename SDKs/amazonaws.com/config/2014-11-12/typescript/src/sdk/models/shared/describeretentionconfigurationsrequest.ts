import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeRetentionConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RetentionConfigurationNames" })
  retentionConfigurationNames?: string[];
}
