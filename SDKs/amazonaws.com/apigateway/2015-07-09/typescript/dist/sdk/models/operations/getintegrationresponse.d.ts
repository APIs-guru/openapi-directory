import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetIntegrationResponsePathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
    statusCode: string;
}
export declare class GetIntegrationResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntegrationResponseRequest extends SpeakeasyBase {
    pathParams: GetIntegrationResponsePathParams;
    headers: GetIntegrationResponseHeaders;
}
export declare class GetIntegrationResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    integrationResponse?: shared.IntegrationResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
