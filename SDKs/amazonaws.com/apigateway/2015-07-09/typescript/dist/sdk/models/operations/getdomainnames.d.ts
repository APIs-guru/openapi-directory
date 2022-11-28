import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainNamesQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetDomainNamesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDomainNamesRequest extends SpeakeasyBase {
    queryParams: GetDomainNamesQueryParams;
    headers: GetDomainNamesHeaders;
}
export declare class GetDomainNamesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    domainNames?: shared.DomainNames;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
