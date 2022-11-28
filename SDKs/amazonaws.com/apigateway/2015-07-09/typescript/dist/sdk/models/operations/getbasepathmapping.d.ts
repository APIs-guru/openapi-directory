import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBasePathMappingPathParams extends SpeakeasyBase {
    basePath: string;
    domainName: string;
}
export declare class GetBasePathMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBasePathMappingRequest extends SpeakeasyBase {
    pathParams: GetBasePathMappingPathParams;
    headers: GetBasePathMappingHeaders;
}
export declare class GetBasePathMappingResponse extends SpeakeasyBase {
    badRequestException?: any;
    basePathMapping?: shared.BasePathMapping;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
