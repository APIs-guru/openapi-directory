import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateApiDestinationXAmzTargetEnum {
    AwsEventsCreateApiDestination = "AWSEvents.CreateApiDestination"
}
export declare class CreateApiDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApiDestinationXAmzTargetEnum;
}
export declare class CreateApiDestinationRequest extends SpeakeasyBase {
    headers: CreateApiDestinationHeaders;
    request: shared.CreateApiDestinationRequest;
}
export declare class CreateApiDestinationResponse extends SpeakeasyBase {
    contentType: string;
    createApiDestinationResponse?: shared.CreateApiDestinationResponse;
    internalException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
