import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfiguration } from "./securityconfiguration";



export class GetSecurityConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfigurations", elemType: SecurityConfiguration })
  securityConfigurations?: SecurityConfiguration[];
}
