import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClientCertificatesQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetClientCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetClientCertificatesRequest extends SpeakeasyBase {
    queryParams: GetClientCertificatesQueryParams;
    headers: GetClientCertificatesHeaders;
}
export declare class GetClientCertificatesResponse extends SpeakeasyBase {
    badRequestException?: any;
    clientCertificates?: shared.ClientCertificates;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
