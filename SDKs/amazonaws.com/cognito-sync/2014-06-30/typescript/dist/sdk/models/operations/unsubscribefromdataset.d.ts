import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnsubscribeFromDatasetPathParams extends SpeakeasyBase {
    datasetName: string;
    deviceId: string;
    identityId: string;
    identityPoolId: string;
}
export declare class UnsubscribeFromDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UnsubscribeFromDatasetRequest extends SpeakeasyBase {
    pathParams: UnsubscribeFromDatasetPathParams;
    headers: UnsubscribeFromDatasetHeaders;
}
export declare class UnsubscribeFromDatasetResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidConfigurationException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsubscribeFromDatasetResponse?: Map<string, any>;
}
