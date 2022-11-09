import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCodesSharedModelsAuthorizationCodeUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=UserID" })
  userId?: number;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
