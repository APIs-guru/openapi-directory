import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQueryQueryParams extends SpeakeasyBase {
    oneProperty: string;
    onePropertyValue: string;
    pLimit: number;
    path: string;
}
export declare class GetQueryRequest extends SpeakeasyBase {
    queryParams: GetQueryQueryParams;
}
export declare class GetQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getQueryDefaultApplicationJsonString?: string;
}
