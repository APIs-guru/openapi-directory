import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizationCategoriesRemoveUserPathParams extends SpeakeasyBase {
    id: string;
    userId: number;
}
export declare class AuthorizationCategoriesRemoveUserRequest extends SpeakeasyBase {
    pathParams: AuthorizationCategoriesRemoveUserPathParams;
}
export declare class AuthorizationCategoriesRemoveUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
