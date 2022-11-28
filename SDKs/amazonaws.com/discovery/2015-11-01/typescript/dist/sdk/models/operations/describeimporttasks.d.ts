import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeImportTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeImportTasksXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeImportTasks = "AWSPoseidonService_V2015_11_01.DescribeImportTasks"
}
export declare class DescribeImportTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImportTasksXAmzTargetEnum;
}
export declare class DescribeImportTasksRequest extends SpeakeasyBase {
    queryParams: DescribeImportTasksQueryParams;
    headers: DescribeImportTasksHeaders;
    request: shared.DescribeImportTasksRequest;
}
export declare class DescribeImportTasksResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    describeImportTasksResponse?: shared.DescribeImportTasksResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
