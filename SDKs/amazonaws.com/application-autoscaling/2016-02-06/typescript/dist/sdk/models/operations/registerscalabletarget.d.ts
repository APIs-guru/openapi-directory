import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RegisterScalableTargetXAmzTargetEnum {
    AnyScaleFrontendServiceRegisterScalableTarget = "AnyScaleFrontendService.RegisterScalableTarget"
}
export declare class RegisterScalableTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterScalableTargetXAmzTargetEnum;
}
export declare class RegisterScalableTargetRequest extends SpeakeasyBase {
    headers: RegisterScalableTargetHeaders;
    request: shared.RegisterScalableTargetRequest;
}
export declare class RegisterScalableTargetResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    internalServiceException?: any;
    limitExceededException?: any;
    registerScalableTargetResponse?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
