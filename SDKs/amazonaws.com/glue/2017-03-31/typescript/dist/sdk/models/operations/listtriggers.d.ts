import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTriggersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTriggersXAmzTargetEnum {
    AwsGlueListTriggers = "AWSGlue.ListTriggers"
}
export declare class ListTriggersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTriggersXAmzTargetEnum;
}
export declare class ListTriggersRequest extends SpeakeasyBase {
    queryParams: ListTriggersQueryParams;
    headers: ListTriggersHeaders;
    request: shared.ListTriggersRequest;
}
export declare class ListTriggersResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    listTriggersResponse?: shared.ListTriggersResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
