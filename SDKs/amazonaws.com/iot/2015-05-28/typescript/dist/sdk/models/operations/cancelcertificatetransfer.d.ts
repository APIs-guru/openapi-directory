import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelCertificateTransferPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CancelCertificateTransferHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelCertificateTransferRequest extends SpeakeasyBase {
    pathParams: CancelCertificateTransferPathParams;
    headers: CancelCertificateTransferHeaders;
}
export declare class CancelCertificateTransferResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    transferAlreadyCompletedException?: any;
    unauthorizedException?: any;
}
