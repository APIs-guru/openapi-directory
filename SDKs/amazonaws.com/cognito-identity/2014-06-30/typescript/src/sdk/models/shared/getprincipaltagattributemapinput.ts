import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPrincipalTagAttributeMapInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=IdentityProviderName" })
  identityProviderName: string;
}
