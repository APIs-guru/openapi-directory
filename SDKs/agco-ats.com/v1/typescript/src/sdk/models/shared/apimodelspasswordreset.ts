import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiModelsPasswordReset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NewPassword, form, name=NewPassword;" })
  newPassword: string;

  @SpeakeasyMetadata({ data: "json, name=Token, form, name=Token;" })
  token: string;
}
