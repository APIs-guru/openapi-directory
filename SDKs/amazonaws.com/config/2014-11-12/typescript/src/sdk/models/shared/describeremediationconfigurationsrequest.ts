import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeRemediationConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames: string[];
}
