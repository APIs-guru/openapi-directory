import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodesSharedModelsParameter } from "./authorizationcodessharedmodelsparameter";
/**
 * Represents the model containing an authorization code used to unlock a feature in machines and EDT
**/
export declare class AuthorizationCodesSharedModelsAuthorizationCode extends SpeakeasyBase {
    code?: string;
    createdByUserId?: number;
    createdDate?: Date;
    dataParameters?: AuthorizationCodesSharedModelsParameter[];
    definitionId?: string;
    deletedByUserId?: number;
    deletedDate?: Date;
    effectiveDate?: Date;
    id?: number;
    isDeleted?: boolean;
    validationParameters?: AuthorizationCodesSharedModelsParameter[];
}
