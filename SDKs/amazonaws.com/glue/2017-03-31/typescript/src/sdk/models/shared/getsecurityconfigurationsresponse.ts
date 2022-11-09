import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecurityConfiguration } from "./securityconfiguration";


export class GetSecurityConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SecurityConfigurations", elemType: shared.SecurityConfiguration })
  securityConfigurations?: SecurityConfiguration[];
}
