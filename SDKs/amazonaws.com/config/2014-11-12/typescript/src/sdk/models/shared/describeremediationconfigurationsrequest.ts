import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRemediationConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames: string[];
}
