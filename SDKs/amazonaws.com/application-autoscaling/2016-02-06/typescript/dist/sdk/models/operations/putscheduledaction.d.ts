import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutScheduledActionXAmzTargetEnum {
    AnyScaleFrontendServicePutScheduledAction = "AnyScaleFrontendService.PutScheduledAction"
}
export declare class PutScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutScheduledActionXAmzTargetEnum;
}
export declare class PutScheduledActionRequest extends SpeakeasyBase {
    headers: PutScheduledActionHeaders;
    request: shared.PutScheduledActionRequest;
}
export declare class PutScheduledActionResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    internalServiceException?: any;
    limitExceededException?: any;
    objectNotFoundException?: any;
    putScheduledActionResponse?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
