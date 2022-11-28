import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsDataField } from "./authorizationcodessharedmodelsdatafield";
import { AuthorizationCodesSharedModelsValidationField } from "./authorizationcodessharedmodelsvalidationfield";
export declare enum AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum {
    Weeks = "Weeks",
    Days = "Days",
    Hours = "Hours",
    Minutes = "Minutes"
}
/**
 * Represents the model used to define how a type of authorization code is generated.
**/
export declare class AuthorizationCodesSharedModelsAuthorizationCodeDefinition extends SpeakeasyBase {
    authorizationId?: string;
    createdByUserId?: number;
    createdDate?: Date;
    dataFields?: AuthorizationCodesSharedModelsDataField[];
    deletedByUserId?: number;
    deletedDate?: Date;
    description?: string;
    durationAccuracy?: number;
    durationAmount?: number;
    durationUnits?: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum;
    hashLength?: number;
    id?: string;
    isDeleted?: boolean;
    name: string;
    randomLength?: number;
    validationFields?: AuthorizationCodesSharedModelsValidationField[];
}
