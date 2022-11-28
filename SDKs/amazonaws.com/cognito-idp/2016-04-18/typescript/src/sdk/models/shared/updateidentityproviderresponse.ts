import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderType } from "./identityprovidertype";



export class UpdateIdentityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityProvider" })
  identityProvider: IdentityProviderType;
}
