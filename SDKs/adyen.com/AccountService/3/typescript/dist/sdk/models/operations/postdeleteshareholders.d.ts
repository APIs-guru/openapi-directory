import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDeleteShareholdersSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostDeleteShareholdersRequest extends SpeakeasyBase {
    request?: any;
    security: PostDeleteShareholdersSecurity;
}
export declare class PostDeleteShareholdersResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
