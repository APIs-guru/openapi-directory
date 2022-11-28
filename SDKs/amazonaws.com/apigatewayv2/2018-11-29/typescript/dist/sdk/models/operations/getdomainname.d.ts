import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainNamePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetDomainNameHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDomainNameRequest extends SpeakeasyBase {
    pathParams: GetDomainNamePathParams;
    headers: GetDomainNameHeaders;
}
export declare class GetDomainNameResponse extends SpeakeasyBase {
    contentType: string;
    getDomainNameResponse?: shared.GetDomainNameResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
