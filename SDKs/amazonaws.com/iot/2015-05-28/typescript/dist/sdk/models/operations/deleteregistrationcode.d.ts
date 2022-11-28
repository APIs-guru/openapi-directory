import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRegistrationCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRegistrationCodeRequest extends SpeakeasyBase {
    headers: DeleteRegistrationCodeHeaders;
}
export declare class DeleteRegistrationCodeResponse extends SpeakeasyBase {
    contentType: string;
    deleteRegistrationCodeResponse?: Map<string, any>;
    internalFailureException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
