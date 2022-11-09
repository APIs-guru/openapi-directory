import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainNameConfiguration } from "./domainnameconfiguration";
import { MutualTlsAuthentication } from "./mutualtlsauthentication";


export class UpdateDomainNameResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiMappingSelectionExpression" })
  apiMappingSelectionExpression?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=DomainNameConfigurations", elemType: shared.DomainNameConfiguration })
  domainNameConfigurations?: DomainNameConfiguration[];

  @Metadata({ data: "json, name=MutualTlsAuthentication" })
  mutualTlsAuthentication?: MutualTlsAuthentication;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
