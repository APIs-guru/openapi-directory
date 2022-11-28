import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCertificatesByCaPathParams extends SpeakeasyBase {
    caCertificateId: string;
}
export declare class ListCertificatesByCaQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListCertificatesByCaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCertificatesByCaRequest extends SpeakeasyBase {
    pathParams: ListCertificatesByCaPathParams;
    queryParams: ListCertificatesByCaQueryParams;
    headers: ListCertificatesByCaHeaders;
}
export declare class ListCertificatesByCaResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listCertificatesByCaResponse?: shared.ListCertificatesByCaResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
