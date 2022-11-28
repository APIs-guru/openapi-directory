import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTriggersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetTriggersXAmzTargetEnum {
    AwsGlueGetTriggers = "AWSGlue.GetTriggers"
}
export declare class GetTriggersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTriggersXAmzTargetEnum;
}
export declare class GetTriggersRequest extends SpeakeasyBase {
    queryParams: GetTriggersQueryParams;
    headers: GetTriggersHeaders;
    request: shared.GetTriggersRequest;
}
export declare class GetTriggersResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getTriggersResponse?: shared.GetTriggersResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
