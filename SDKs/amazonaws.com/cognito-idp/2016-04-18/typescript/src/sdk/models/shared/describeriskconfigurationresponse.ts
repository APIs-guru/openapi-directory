import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RiskConfigurationType } from "./riskconfigurationtype";


export class DescribeRiskConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RiskConfiguration" })
  riskConfiguration: RiskConfigurationType;
}
