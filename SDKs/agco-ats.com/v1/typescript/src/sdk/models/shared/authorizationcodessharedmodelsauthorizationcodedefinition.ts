import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodesSharedModelsDataField } from "./authorizationcodessharedmodelsdatafield";
import { AuthorizationCodesSharedModelsValidationField } from "./authorizationcodessharedmodelsvalidationfield";

export enum AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum {
    Weeks = "Weeks"
,    Days = "Days"
,    Hours = "Hours"
,    Minutes = "Minutes"
}


// AuthorizationCodesSharedModelsAuthorizationCodeDefinition
/** 
 * Represents the model used to define how a type of authorization code is generated.
**/
export class AuthorizationCodesSharedModelsAuthorizationCodeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationID" })
  authorizationId?: string;

  @Metadata({ data: "json, name=CreatedByUserID" })
  createdByUserId?: number;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DataFields", elemType: shared.AuthorizationCodesSharedModelsDataField })
  dataFields?: AuthorizationCodesSharedModelsDataField[];

  @Metadata({ data: "json, name=DeletedByUserID" })
  deletedByUserId?: number;

  @Metadata({ data: "json, name=DeletedDate" })
  deletedDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DurationAccuracy" })
  durationAccuracy?: number;

  @Metadata({ data: "json, name=DurationAmount" })
  durationAmount?: number;

  @Metadata({ data: "json, name=DurationUnits" })
  durationUnits?: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum;

  @Metadata({ data: "json, name=HashLength" })
  hashLength?: number;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=IsDeleted" })
  isDeleted?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RandomLength" })
  randomLength?: number;

  @Metadata({ data: "json, name=ValidationFields", elemType: shared.AuthorizationCodesSharedModelsValidationField })
  validationFields?: AuthorizationCodesSharedModelsValidationField[];
}
