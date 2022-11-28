import { SpeakeasyBase } from "../../../internal/utils";
export declare class RejectCertificateTransferPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class RejectCertificateTransferHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RejectCertificateTransferRequestBody extends SpeakeasyBase {
    rejectReason?: string;
}
export declare class RejectCertificateTransferRequest extends SpeakeasyBase {
    pathParams: RejectCertificateTransferPathParams;
    headers: RejectCertificateTransferHeaders;
    request: RejectCertificateTransferRequestBody;
}
export declare class RejectCertificateTransferResponse extends SpeakeasyBase {
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
