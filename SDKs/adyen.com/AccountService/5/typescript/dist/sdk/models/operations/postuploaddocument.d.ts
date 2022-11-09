import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUploadDocumentSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostUploadDocumentSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostUploadDocumentSecurity extends SpeakeasyBase {
    option1?: PostUploadDocumentSecurityOption1;
    option2?: PostUploadDocumentSecurityOption2;
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
