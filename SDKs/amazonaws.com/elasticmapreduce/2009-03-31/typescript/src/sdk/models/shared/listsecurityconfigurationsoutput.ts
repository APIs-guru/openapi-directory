import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecurityConfigurationSummary } from "./securityconfigurationsummary";


export class ListSecurityConfigurationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=SecurityConfigurations", elemType: shared.SecurityConfigurationSummary })
  securityConfigurations?: SecurityConfigurationSummary[];
}
