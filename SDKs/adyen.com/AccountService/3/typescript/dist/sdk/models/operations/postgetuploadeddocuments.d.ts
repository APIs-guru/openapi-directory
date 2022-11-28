import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetUploadedDocumentsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostGetUploadedDocumentsRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetUploadedDocumentsSecurity;
}
export declare class PostGetUploadedDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    getUploadedDocumentsResponse?: any;
    serviceError?: any;
    statusCode: number;
}
