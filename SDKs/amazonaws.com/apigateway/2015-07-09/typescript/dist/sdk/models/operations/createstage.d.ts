import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStagePathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class CreateStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateStageRequestBodyCacheClusterSizeEnum {
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
 * Configuration settings of a canary deployment.
**/
export declare class CreateStageRequestBodyCanarySettings extends SpeakeasyBase {
    deploymentId?: string;
    percentTraffic?: number;
    stageVariableOverrides?: Map<string, string>;
    useStageCache?: boolean;
}
export declare class CreateStageRequestBody extends SpeakeasyBase {
    cacheClusterEnabled?: boolean;
    cacheClusterSize?: CreateStageRequestBodyCacheClusterSizeEnum;
    canarySettings?: CreateStageRequestBodyCanarySettings;
    deploymentId: string;
    description?: string;
    documentationVersion?: string;
    stageName: string;
    tags?: Map<string, string>;
    tracingEnabled?: boolean;
    variables?: Map<string, string>;
}
export declare class CreateStageRequest extends SpeakeasyBase {
    pathParams: CreateStagePathParams;
    headers: CreateStageHeaders;
    request: CreateStageRequestBody;
}
export declare class CreateStageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    stage?: shared.Stage;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
