import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfiguration } from "./securityconfiguration";



export class GetSecurityConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: SecurityConfiguration;
}
