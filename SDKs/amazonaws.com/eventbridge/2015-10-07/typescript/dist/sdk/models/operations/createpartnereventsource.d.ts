import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreatePartnerEventSourceXAmzTargetEnum {
    AwsEventsCreatePartnerEventSource = "AWSEvents.CreatePartnerEventSource"
}
export declare class CreatePartnerEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePartnerEventSourceXAmzTargetEnum;
}
export declare class CreatePartnerEventSourceRequest extends SpeakeasyBase {
    headers: CreatePartnerEventSourceHeaders;
    request: shared.CreatePartnerEventSourceRequest;
}
export declare class CreatePartnerEventSourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createPartnerEventSourceResponse?: shared.CreatePartnerEventSourceResponse;
    internalException?: any;
    limitExceededException?: any;
    operationDisabledException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
