import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadDocumentSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostUploadDocumentRequest extends SpeakeasyBase {
    request?: any;
    security: PostUploadDocumentSecurity;
}
export declare class PostUploadDocumentResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    updateAccountHolderResponse?: any;
}
