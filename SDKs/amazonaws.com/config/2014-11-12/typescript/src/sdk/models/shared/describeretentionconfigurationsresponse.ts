import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionConfiguration } from "./retentionconfiguration";



export class DescribeRetentionConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionConfigurations", elemType: RetentionConfiguration })
  retentionConfigurations?: RetentionConfiguration[];
}
