import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOutgoingCertificatesQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListOutgoingCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOutgoingCertificatesRequest extends SpeakeasyBase {
    queryParams: ListOutgoingCertificatesQueryParams;
    headers: ListOutgoingCertificatesHeaders;
}
export declare class ListOutgoingCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listOutgoingCertificatesResponse?: shared.ListOutgoingCertificatesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
