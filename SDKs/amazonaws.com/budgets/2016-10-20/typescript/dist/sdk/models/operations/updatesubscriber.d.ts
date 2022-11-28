import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSubscriberXAmzTargetEnum {
    AwsBudgetServiceGatewayUpdateSubscriber = "AWSBudgetServiceGateway.UpdateSubscriber"
}
export declare class UpdateSubscriberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubscriberXAmzTargetEnum;
}
export declare class UpdateSubscriberRequest extends SpeakeasyBase {
    headers: UpdateSubscriberHeaders;
    request: shared.UpdateSubscriberRequest;
}
export declare class UpdateSubscriberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    duplicateRecordException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
    updateSubscriberResponse?: Map<string, any>;
}
