import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderName" })
  identityProviderName?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalTags" })
  principalTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UseDefaults" })
  useDefaults?: boolean;
}
