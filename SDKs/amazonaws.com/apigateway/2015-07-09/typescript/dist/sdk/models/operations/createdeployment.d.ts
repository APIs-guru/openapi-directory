import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeploymentPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class CreateDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateDeploymentRequestBodyCacheClusterSizeEnum {
    Zero5 = "0.5",
    One6 = "1.6",
    Six1 = "6.1",
    Thirteen5 = "13.5",
    TwentyEight4 = "28.4",
    FiftyEight2 = "58.2",
    OneHundredAndEighteen = "118",
    TwoHundredAndThirtySeven = "237"
}
/**
 * The input configuration for a canary deployment.
**/
export declare class CreateDeploymentRequestBodyCanarySettings extends SpeakeasyBase {
    percentTraffic?: number;
    stageVariableOverrides?: Map<string, string>;
    useStageCache?: boolean;
}
export declare class CreateDeploymentRequestBody extends SpeakeasyBase {
    cacheClusterEnabled?: boolean;
    cacheClusterSize?: CreateDeploymentRequestBodyCacheClusterSizeEnum;
    canarySettings?: CreateDeploymentRequestBodyCanarySettings;
    description?: string;
    stageDescription?: string;
    stageName?: string;
    tracingEnabled?: boolean;
    variables?: Map<string, string>;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    pathParams: CreateDeploymentPathParams;
    headers: CreateDeploymentHeaders;
    request: CreateDeploymentRequestBody;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    deployment?: shared.Deployment;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
