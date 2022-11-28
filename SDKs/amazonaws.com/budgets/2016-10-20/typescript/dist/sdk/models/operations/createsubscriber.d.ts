import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSubscriberXAmzTargetEnum {
    AwsBudgetServiceGatewayCreateSubscriber = "AWSBudgetServiceGateway.CreateSubscriber"
}
export declare class CreateSubscriberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSubscriberXAmzTargetEnum;
}
export declare class CreateSubscriberRequest extends SpeakeasyBase {
    headers: CreateSubscriberHeaders;
    request: shared.CreateSubscriberRequest;
}
export declare class CreateSubscriberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createSubscriberResponse?: Map<string, any>;
    creationLimitExceededException?: any;
    duplicateRecordException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
