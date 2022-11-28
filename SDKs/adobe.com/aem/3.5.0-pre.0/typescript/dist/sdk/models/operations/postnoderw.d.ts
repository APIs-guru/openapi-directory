import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNodeRwPathParams extends SpeakeasyBase {
    name: string;
    path: string;
}
export declare class PostNodeRwQueryParams extends SpeakeasyBase {
    addMembers?: string;
}
export declare class PostNodeRwRequest extends SpeakeasyBase {
    pathParams: PostNodeRwPathParams;
    queryParams: PostNodeRwQueryParams;
}
export declare class PostNodeRwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
