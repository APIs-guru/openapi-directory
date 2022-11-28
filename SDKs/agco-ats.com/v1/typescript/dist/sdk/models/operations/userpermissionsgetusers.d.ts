import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserPermissionsGetUsersPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UserPermissionsGetUsersQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class UserPermissionsGetUsersRequest extends SpeakeasyBase {
    pathParams: UserPermissionsGetUsersPathParams;
    queryParams: UserPermissionsGetUsersQueryParams;
}
export declare class UserPermissionsGetUsersResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseApiModelsUser?: shared.ApiPagedResponseApiModelsUser;
    contentType: string;
    statusCode: number;
}
