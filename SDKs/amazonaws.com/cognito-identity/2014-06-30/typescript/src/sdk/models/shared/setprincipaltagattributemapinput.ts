import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPrincipalTagAttributeMapInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderName" })
  identityProviderName: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalTags" })
  principalTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UseDefaults" })
  useDefaults?: boolean;
}
