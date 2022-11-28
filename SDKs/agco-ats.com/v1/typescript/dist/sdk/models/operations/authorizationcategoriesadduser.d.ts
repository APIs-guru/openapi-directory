import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizationCategoriesAddUserPathParams extends SpeakeasyBase {
    id: string;
    userId: number;
}
export declare class AuthorizationCategoriesAddUserRequest extends SpeakeasyBase {
    pathParams: AuthorizationCategoriesAddUserPathParams;
}
export declare class AuthorizationCategoriesAddUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
