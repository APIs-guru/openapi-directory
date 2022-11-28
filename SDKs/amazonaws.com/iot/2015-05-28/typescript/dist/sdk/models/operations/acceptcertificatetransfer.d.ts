import { SpeakeasyBase } from "../../../internal/utils";
export declare class AcceptCertificateTransferPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class AcceptCertificateTransferQueryParams extends SpeakeasyBase {
    setAsActive?: boolean;
}
export declare class AcceptCertificateTransferHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptCertificateTransferRequest extends SpeakeasyBase {
    pathParams: AcceptCertificateTransferPathParams;
    queryParams: AcceptCertificateTransferQueryParams;
    headers: AcceptCertificateTransferHeaders;
}
export declare class AcceptCertificateTransferResponse extends SpeakeasyBase {
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
