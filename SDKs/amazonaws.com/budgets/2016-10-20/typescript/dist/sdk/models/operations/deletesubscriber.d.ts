import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSubscriberXAmzTargetEnum {
    AwsBudgetServiceGatewayDeleteSubscriber = "AWSBudgetServiceGateway.DeleteSubscriber"
}
export declare class DeleteSubscriberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubscriberXAmzTargetEnum;
}
export declare class DeleteSubscriberRequest extends SpeakeasyBase {
    headers: DeleteSubscriberHeaders;
    request: shared.DeleteSubscriberRequest;
}
export declare class DeleteSubscriberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteSubscriberResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
