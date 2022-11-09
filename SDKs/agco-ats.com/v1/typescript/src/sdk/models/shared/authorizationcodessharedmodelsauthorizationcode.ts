import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsParameter } from "./authorizationcodessharedmodelsparameter";
import { AuthorizationCodesSharedModelsParameter } from "./authorizationcodessharedmodelsparameter";


// AuthorizationCodesSharedModelsAuthorizationCode
/** 
 * Represents the model containing an authorization code used to unlock a feature in machines and EDT
**/
export class AuthorizationCodesSharedModelsAuthorizationCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=CreatedByUserID" })
  createdByUserId?: number;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DataParameters", elemType: shared.AuthorizationCodesSharedModelsParameter })
  dataParameters?: AuthorizationCodesSharedModelsParameter[];

  @Metadata({ data: "json, name=DefinitionID" })
  definitionId?: string;

  @Metadata({ data: "json, name=DeletedByUserID" })
  deletedByUserId?: number;

  @Metadata({ data: "json, name=DeletedDate" })
  deletedDate?: Date;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=ID" })
  id?: number;

  @Metadata({ data: "json, name=IsDeleted" })
  isDeleted?: boolean;

  @Metadata({ data: "json, name=ValidationParameters", elemType: shared.AuthorizationCodesSharedModelsParameter })
  validationParameters?: AuthorizationCodesSharedModelsParameter[];
}
