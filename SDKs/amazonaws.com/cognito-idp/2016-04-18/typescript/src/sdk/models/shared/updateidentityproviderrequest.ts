import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateIdentityProviderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeMapping" })
  attributeMapping?: Map<string, string>;

  @Metadata({ data: "json, name=IdpIdentifiers" })
  idpIdentifiers?: string[];

  @Metadata({ data: "json, name=ProviderDetails" })
  providerDetails?: Map<string, string>;

  @Metadata({ data: "json, name=ProviderName" })
  providerName: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
