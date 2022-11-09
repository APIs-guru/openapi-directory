import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDeleteShareholdersSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostDeleteShareholdersSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostDeleteShareholdersSecurity extends SpeakeasyBase {
    option1?: PostDeleteShareholdersSecurityOption1;
    option2?: PostDeleteShareholdersSecurityOption2;
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
