import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterScalableTargetXAmzTargetEnum {
    AnyScaleFrontendServiceDeregisterScalableTarget = "AnyScaleFrontendService.DeregisterScalableTarget"
}
export declare class DeregisterScalableTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterScalableTargetXAmzTargetEnum;
}
export declare class DeregisterScalableTargetRequest extends SpeakeasyBase {
    headers: DeregisterScalableTargetHeaders;
    request: shared.DeregisterScalableTargetRequest;
}
export declare class DeregisterScalableTargetResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    deregisterScalableTargetResponse?: Map<string, any>;
    internalServiceException?: any;
    objectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
