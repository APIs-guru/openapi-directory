import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCaCertificatesQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListCaCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCaCertificatesRequest extends SpeakeasyBase {
    queryParams: ListCaCertificatesQueryParams;
    headers: ListCaCertificatesHeaders;
}
export declare class ListCaCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listCaCertificatesResponse?: shared.ListCaCertificatesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
