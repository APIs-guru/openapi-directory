import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubscribeToDatasetPathParams extends SpeakeasyBase {
    datasetName: string;
    deviceId: string;
    identityId: string;
    identityPoolId: string;
}
export declare class SubscribeToDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SubscribeToDatasetRequest extends SpeakeasyBase {
    pathParams: SubscribeToDatasetPathParams;
    headers: SubscribeToDatasetHeaders;
}
export declare class SubscribeToDatasetResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidConfigurationException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    subscribeToDatasetResponse?: Map<string, any>;
    tooManyRequestsException?: any;
}
