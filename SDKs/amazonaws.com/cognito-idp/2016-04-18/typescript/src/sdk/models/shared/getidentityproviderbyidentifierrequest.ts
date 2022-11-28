import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIdentityProviderByIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdpIdentifier" })
  idpIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
