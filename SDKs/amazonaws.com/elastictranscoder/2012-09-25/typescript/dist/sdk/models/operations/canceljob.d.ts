import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelJobPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CancelJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelJobRequest extends SpeakeasyBase {
    pathParams: CancelJobPathParams;
    headers: CancelJobHeaders;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelJobResponse?: Map<string, any>;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
