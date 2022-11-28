import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeExportTasksXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeExportTasks = "AWSPoseidonService_V2015_11_01.DescribeExportTasks"
}
export declare class DescribeExportTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportTasksXAmzTargetEnum;
}
export declare class DescribeExportTasksRequest extends SpeakeasyBase {
    headers: DescribeExportTasksHeaders;
    request: shared.DescribeExportTasksRequest;
}
export declare class DescribeExportTasksResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    describeExportTasksResponse?: shared.DescribeExportTasksResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
