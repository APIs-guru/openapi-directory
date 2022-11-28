import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCertificatesQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCertificatesRequest extends SpeakeasyBase {
    queryParams: ListCertificatesQueryParams;
    headers: ListCertificatesHeaders;
}
export declare class ListCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listCertificatesResponse?: shared.ListCertificatesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
