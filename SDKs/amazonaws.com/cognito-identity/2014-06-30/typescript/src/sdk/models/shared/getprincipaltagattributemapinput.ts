import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPrincipalTagAttributeMapInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderName" })
  identityProviderName: string;
}
