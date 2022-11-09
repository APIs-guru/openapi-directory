import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIdentityProviderByIdentifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdpIdentifier" })
  idpIdentifier: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
