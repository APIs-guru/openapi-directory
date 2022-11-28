import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIntegrationResponsePathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
    integrationResponseId: string;
}
export declare class DeleteIntegrationResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteIntegrationResponseRequest extends SpeakeasyBase {
    pathParams: DeleteIntegrationResponsePathParams;
    headers: DeleteIntegrationResponseHeaders;
}
export declare class DeleteIntegrationResponseResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
