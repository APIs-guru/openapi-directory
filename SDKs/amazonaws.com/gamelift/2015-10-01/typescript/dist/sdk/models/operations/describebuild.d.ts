import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeBuildXAmzTargetEnum {
    GameLiftDescribeBuild = "GameLift.DescribeBuild"
}
export declare class DescribeBuildHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBuildXAmzTargetEnum;
}
export declare class DescribeBuildRequest extends SpeakeasyBase {
    headers: DescribeBuildHeaders;
    request: shared.DescribeBuildInput;
}
export declare class DescribeBuildResponse extends SpeakeasyBase {
    contentType: string;
    describeBuildOutput?: shared.DescribeBuildOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
