import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCertificateFromCsrQueryParams extends SpeakeasyBase {
    setAsActive?: boolean;
}
export declare class CreateCertificateFromCsrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCertificateFromCsrRequestBody extends SpeakeasyBase {
    certificateSigningRequest: string;
}
export declare class CreateCertificateFromCsrRequest extends SpeakeasyBase {
    queryParams: CreateCertificateFromCsrQueryParams;
    headers: CreateCertificateFromCsrHeaders;
    request: CreateCertificateFromCsrRequestBody;
}
export declare class CreateCertificateFromCsrResponse extends SpeakeasyBase {
    contentType: string;
    createCertificateFromCsrResponse?: shared.CreateCertificateFromCsrResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
