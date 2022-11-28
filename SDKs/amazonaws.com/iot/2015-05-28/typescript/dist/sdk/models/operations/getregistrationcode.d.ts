import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegistrationCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRegistrationCodeRequest extends SpeakeasyBase {
    headers: GetRegistrationCodeHeaders;
}
export declare class GetRegistrationCodeResponse extends SpeakeasyBase {
    contentType: string;
    getRegistrationCodeResponse?: shared.GetRegistrationCodeResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
