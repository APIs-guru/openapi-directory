import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsParameter } from "./authorizationcodessharedmodelsparameter";



// AuthorizationCodesSharedModelsAuthorizationCode
/** 
 * Represents the model containing an authorization code used to unlock a feature in machines and EDT
**/
export class AuthorizationCodesSharedModelsAuthorizationCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedByUserID" })
  createdByUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataParameters", elemType: AuthorizationCodesSharedModelsParameter })
  dataParameters?: AuthorizationCodesSharedModelsParameter[];

  @SpeakeasyMetadata({ data: "json, name=DefinitionID" })
  definitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeletedByUserID" })
  deletedByUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=DeletedDate" })
  deletedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IsDeleted" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ValidationParameters", elemType: AuthorizationCodesSharedModelsParameter })
  validationParameters?: AuthorizationCodesSharedModelsParameter[];
}
