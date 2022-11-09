import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=IdentityProviderName" })
  identityProviderName?: string;

  @Metadata({ data: "json, name=PrincipalTags" })
  principalTags?: Map<string, string>;

  @Metadata({ data: "json, name=UseDefaults" })
  useDefaults?: boolean;
}
