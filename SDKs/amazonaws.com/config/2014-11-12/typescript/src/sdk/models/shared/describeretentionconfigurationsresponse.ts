import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RetentionConfiguration } from "./retentionconfiguration";


export class DescribeRetentionConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RetentionConfigurations", elemType: shared.RetentionConfiguration })
  retentionConfigurations?: RetentionConfiguration[];
}
