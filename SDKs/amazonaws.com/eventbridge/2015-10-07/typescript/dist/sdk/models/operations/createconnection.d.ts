import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateConnectionXAmzTargetEnum {
    AwsEventsCreateConnection = "AWSEvents.CreateConnection"
}
export declare class CreateConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    headers: CreateConnectionHeaders;
    request: shared.CreateConnectionRequest;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    contentType: string;
    createConnectionResponse?: shared.CreateConnectionResponse;
    internalException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
