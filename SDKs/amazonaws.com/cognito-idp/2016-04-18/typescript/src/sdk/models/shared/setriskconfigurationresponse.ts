import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RiskConfigurationType } from "./riskconfigurationtype";



export class SetRiskConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RiskConfiguration" })
  riskConfiguration: RiskConfigurationType;
}
