import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateAutoScalingConfigurationXAmzTargetEnum {
    AppRunnerCreateAutoScalingConfiguration = "AppRunner.CreateAutoScalingConfiguration"
}
export declare class CreateAutoScalingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAutoScalingConfigurationXAmzTargetEnum;
}
export declare class CreateAutoScalingConfigurationRequest extends SpeakeasyBase {
    headers: CreateAutoScalingConfigurationHeaders;
    request: shared.CreateAutoScalingConfigurationRequest;
}
export declare class CreateAutoScalingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    createAutoScalingConfigurationResponse?: shared.CreateAutoScalingConfigurationResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
}
