import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfigurationSummary } from "./securityconfigurationsummary";



export class ListSecurityConfigurationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfigurations", elemType: SecurityConfigurationSummary })
  securityConfigurations?: SecurityConfigurationSummary[];
}
