import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCodesSharedModelsCodeValidationModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=IsValid" })
  isValid?: boolean;
}
