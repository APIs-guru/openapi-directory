import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterAccountRequestBody extends SpeakeasyBase {
    delegatedAdminAccount?: string;
    kmsKey?: string;
}
export declare class RegisterAccountRequest extends SpeakeasyBase {
    headers: RegisterAccountHeaders;
    request: RegisterAccountRequestBody;
}
export declare class RegisterAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    registerAccountResponse?: shared.RegisterAccountResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
