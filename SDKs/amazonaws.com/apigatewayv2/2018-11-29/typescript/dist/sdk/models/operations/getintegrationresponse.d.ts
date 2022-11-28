import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationResponsePathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
    integrationResponseId: string;
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
    contentType: string;
    getIntegrationResponseResponse?: shared.GetIntegrationResponseResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
