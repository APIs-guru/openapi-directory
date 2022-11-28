import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationPathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
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
export declare class GetIntegrationRequest extends SpeakeasyBase {
    pathParams: GetIntegrationPathParams;
    headers: GetIntegrationHeaders;
}
export declare class GetIntegrationResponse extends SpeakeasyBase {
    contentType: string;
    getIntegrationResult?: shared.GetIntegrationResult;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
