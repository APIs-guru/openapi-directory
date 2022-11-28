import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNodePathParams extends SpeakeasyBase {
    name: string;
    path: string;
}
export declare class PostNodeQueryParams extends SpeakeasyBase {
    operation?: string;
    deleteAuthorizable?: string;
}
export declare class PostNodeRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostNodeRequestBody extends SpeakeasyBase {
    file?: PostNodeRequestBodyFile;
}
export declare class PostNodeRequest extends SpeakeasyBase {
    pathParams: PostNodePathParams;
    queryParams: PostNodeQueryParams;
    request?: PostNodeRequestBody;
}
export declare class PostNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
