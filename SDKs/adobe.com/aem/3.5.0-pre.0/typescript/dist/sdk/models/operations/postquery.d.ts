import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostQueryQueryParams extends SpeakeasyBase {
    oneProperty: string;
    onePropertyValue: string;
    pLimit: number;
    path: string;
}
export declare class PostQueryRequest extends SpeakeasyBase {
    queryParams: PostQueryQueryParams;
}
export declare class PostQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postQueryDefaultApplicationJsonString?: string;
}
