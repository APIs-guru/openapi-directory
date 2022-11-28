import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthorizablesQueryParams extends SpeakeasyBase {
    authorizableId: string;
    createGroup?: string;
    createUser?: string;
    intermediatePath: string;
    profileGivenName?: string;
    repPassword?: string;
}
export declare class PostAuthorizablesRequest extends SpeakeasyBase {
    queryParams: PostAuthorizablesQueryParams;
}
export declare class PostAuthorizablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAuthorizablesDefaultTextHtmlString?: string;
}
