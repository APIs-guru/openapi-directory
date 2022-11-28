import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDeleteSignatoriesSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostDeleteSignatoriesRequest extends SpeakeasyBase {
    request?: any;
    security: PostDeleteSignatoriesSecurity;
}
export declare class PostDeleteSignatoriesResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
