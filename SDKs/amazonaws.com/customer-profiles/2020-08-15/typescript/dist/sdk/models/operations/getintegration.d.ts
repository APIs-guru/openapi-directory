import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntegrationRequestBody extends SpeakeasyBase {
    uri: string;
}
export declare class GetIntegrationRequest extends SpeakeasyBase {
    pathParams: GetIntegrationPathParams;
    headers: GetIntegrationHeaders;
    request: GetIntegrationRequestBody;
}
export declare class GetIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    getIntegrationResponse?: shared.GetIntegrationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
