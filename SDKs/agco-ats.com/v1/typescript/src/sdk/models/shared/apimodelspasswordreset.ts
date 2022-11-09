import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsPasswordReset extends SpeakeasyBase {
  @Metadata({ data: "json, name=NewPassword, form, name=NewPassword;" })
  newPassword: string;

  @Metadata({ data: "json, name=Token, form, name=Token;" })
  token: string;
}
