import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationConfiguration } from "./remediationconfiguration";



export class DescribeRemediationConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RemediationConfigurations", elemType: RemediationConfiguration })
  remediationConfigurations?: RemediationConfiguration[];
}
