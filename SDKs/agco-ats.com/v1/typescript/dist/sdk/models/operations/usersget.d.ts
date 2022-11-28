import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetQueryParams extends SpeakeasyBase {
    email?: string;
    hasRole?: string;
    limit?: number;
    name?: string;
    offset?: number;
    username?: string;
}
export declare class UsersGetRequest extends SpeakeasyBase {
    queryParams: UsersGetQueryParams;
}
export declare class UsersGetResponse extends SpeakeasyBase {
    apiPagedResponseApiModelsUser?: shared.ApiPagedResponseApiModelsUser;
    contentType: string;
    statusCode: number;
}
