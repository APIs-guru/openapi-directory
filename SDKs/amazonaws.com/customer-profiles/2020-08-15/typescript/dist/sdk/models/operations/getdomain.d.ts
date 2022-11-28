import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDomainRequest extends SpeakeasyBase {
    pathParams: GetDomainPathParams;
    headers: GetDomainHeaders;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    getDomainResponse?: shared.GetDomainResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
