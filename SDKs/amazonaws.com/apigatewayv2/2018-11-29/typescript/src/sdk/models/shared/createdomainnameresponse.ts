import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainNameConfiguration } from "./domainnameconfiguration";
import { MutualTlsAuthentication } from "./mutualtlsauthentication";



export class CreateDomainNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiMappingSelectionExpression" })
  apiMappingSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainNameConfigurations", elemType: DomainNameConfiguration })
  domainNameConfigurations?: DomainNameConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=MutualTlsAuthentication" })
  mutualTlsAuthentication?: MutualTlsAuthentication;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
