import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteScheduledActionXAmzTargetEnum {
    AnyScaleFrontendServiceDeleteScheduledAction = "AnyScaleFrontendService.DeleteScheduledAction"
}
export declare class DeleteScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScheduledActionXAmzTargetEnum;
}
export declare class DeleteScheduledActionRequest extends SpeakeasyBase {
    headers: DeleteScheduledActionHeaders;
    request: shared.DeleteScheduledActionRequest;
}
export declare class DeleteScheduledActionResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    deleteScheduledActionResponse?: Map<string, any>;
    internalServiceException?: any;
    objectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
