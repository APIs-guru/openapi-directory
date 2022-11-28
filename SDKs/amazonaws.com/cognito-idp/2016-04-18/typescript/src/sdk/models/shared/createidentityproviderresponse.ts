import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderType } from "./identityprovidertype";



export class CreateIdentityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityProvider" })
  identityProvider: IdentityProviderType;
}
