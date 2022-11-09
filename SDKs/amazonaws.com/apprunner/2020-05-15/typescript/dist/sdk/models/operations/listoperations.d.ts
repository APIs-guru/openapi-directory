import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListOperationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListOperationsXAmzTargetEnum {
    AppRunnerListOperations = "AppRunner.ListOperations"
}
export declare class ListOperationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOperationsXAmzTargetEnum;
}
export declare class ListOperationsRequest extends SpeakeasyBase {
    queryParams: ListOperationsQueryParams;
    headers: ListOperationsHeaders;
    request: shared.ListOperationsRequest;
}
export declare class ListOperationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    listOperationsResponse?: shared.ListOperationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
