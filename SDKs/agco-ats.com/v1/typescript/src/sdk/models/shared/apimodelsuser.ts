import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiModelsUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangePassword, form, name=ChangePassword;" })
  changePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Password, form, name=Password;" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=Username, form, name=Username;" })
  username?: string;
}
