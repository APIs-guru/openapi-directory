import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizationCodesSharedModelsAuthorizationCodeUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
