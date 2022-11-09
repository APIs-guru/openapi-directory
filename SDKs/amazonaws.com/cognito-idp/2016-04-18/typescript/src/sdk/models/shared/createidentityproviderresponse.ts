import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityProviderType } from "./identityprovidertype";


export class CreateIdentityProviderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityProvider" })
  identityProvider: IdentityProviderType;
}
