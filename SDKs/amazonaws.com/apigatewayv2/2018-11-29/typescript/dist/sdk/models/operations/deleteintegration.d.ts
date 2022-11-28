import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIntegrationPathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
}
export declare class DeleteIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteIntegrationRequest extends SpeakeasyBase {
    pathParams: DeleteIntegrationPathParams;
    headers: DeleteIntegrationHeaders;
}
export declare class DeleteIntegrationResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
