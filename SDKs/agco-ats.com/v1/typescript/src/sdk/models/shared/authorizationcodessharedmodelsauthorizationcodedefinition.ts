import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsDataField } from "./authorizationcodessharedmodelsdatafield";
import { AuthorizationCodesSharedModelsValidationField } from "./authorizationcodessharedmodelsvalidationfield";


export enum AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum {
    Weeks = "Weeks",
    Days = "Days",
    Hours = "Hours",
    Minutes = "Minutes"
}


// AuthorizationCodesSharedModelsAuthorizationCodeDefinition
/** 
 * Represents the model used to define how a type of authorization code is generated.
**/
export class AuthorizationCodesSharedModelsAuthorizationCodeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationID" })
  authorizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedByUserID" })
  createdByUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataFields", elemType: AuthorizationCodesSharedModelsDataField })
  dataFields?: AuthorizationCodesSharedModelsDataField[];

  @SpeakeasyMetadata({ data: "json, name=DeletedByUserID" })
  deletedByUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=DeletedDate" })
  deletedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DurationAccuracy" })
  durationAccuracy?: number;

  @SpeakeasyMetadata({ data: "json, name=DurationAmount" })
  durationAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=DurationUnits" })
  durationUnits?: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum;

  @SpeakeasyMetadata({ data: "json, name=HashLength" })
  hashLength?: number;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsDeleted" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RandomLength" })
  randomLength?: number;

  @SpeakeasyMetadata({ data: "json, name=ValidationFields", elemType: AuthorizationCodesSharedModelsValidationField })
  validationFields?: AuthorizationCodesSharedModelsValidationField[];
}
