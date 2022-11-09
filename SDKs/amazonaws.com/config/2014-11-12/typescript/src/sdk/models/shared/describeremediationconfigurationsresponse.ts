import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationConfiguration } from "./remediationconfiguration";


export class DescribeRemediationConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RemediationConfigurations", elemType: shared.RemediationConfiguration })
  remediationConfigurations?: RemediationConfiguration[];
}
