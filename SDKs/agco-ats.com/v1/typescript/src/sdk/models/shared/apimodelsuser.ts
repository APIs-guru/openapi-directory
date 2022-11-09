import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangePassword, form, name=ChangePassword;" })
  changePassword?: string;

  @Metadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=Password, form, name=Password;" })
  password?: string;

  @Metadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;

  @Metadata({ data: "json, name=Username, form, name=Username;" })
  username?: string;
}
