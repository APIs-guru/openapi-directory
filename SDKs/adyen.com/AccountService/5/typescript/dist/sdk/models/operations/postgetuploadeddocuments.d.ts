import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetUploadedDocumentsSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetUploadedDocumentsSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetUploadedDocumentsSecurity extends SpeakeasyBase {
    option1?: PostGetUploadedDocumentsSecurityOption1;
    option2?: PostGetUploadedDocumentsSecurityOption2;
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
