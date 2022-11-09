import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityConfiguration } from "./securityconfiguration";


export class GetSecurityConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: SecurityConfiguration;
}
