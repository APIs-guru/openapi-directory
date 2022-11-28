import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDevEndpointsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDevEndpointsXAmzTargetEnum {
    AwsGlueListDevEndpoints = "AWSGlue.ListDevEndpoints"
}
export declare class ListDevEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDevEndpointsXAmzTargetEnum;
}
export declare class ListDevEndpointsRequest extends SpeakeasyBase {
    queryParams: ListDevEndpointsQueryParams;
    headers: ListDevEndpointsHeaders;
    request: shared.ListDevEndpointsRequest;
}
export declare class ListDevEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    listDevEndpointsResponse?: shared.ListDevEndpointsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
