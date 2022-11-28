import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PostPathQueryParams extends SpeakeasyBase {
    name: string;
    jcrPrimaryType: string;
}
export declare class PostPathRequest extends SpeakeasyBase {
    pathParams: PostPathPathParams;
    queryParams: PostPathQueryParams;
}
export declare class PostPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
