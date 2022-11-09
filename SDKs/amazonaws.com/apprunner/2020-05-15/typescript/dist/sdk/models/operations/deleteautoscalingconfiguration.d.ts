import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteAutoScalingConfigurationXAmzTargetEnum {
    AppRunnerDeleteAutoScalingConfiguration = "AppRunner.DeleteAutoScalingConfiguration"
}
export declare class DeleteAutoScalingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAutoScalingConfigurationXAmzTargetEnum;
}
export declare class DeleteAutoScalingConfigurationRequest extends SpeakeasyBase {
    headers: DeleteAutoScalingConfigurationHeaders;
    request: shared.DeleteAutoScalingConfigurationRequest;
}
export declare class DeleteAutoScalingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteAutoScalingConfigurationResponse?: shared.DeleteAutoScalingConfigurationResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
