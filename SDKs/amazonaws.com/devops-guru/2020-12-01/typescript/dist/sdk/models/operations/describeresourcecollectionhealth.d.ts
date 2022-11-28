import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeResourceCollectionHealthResourceCollectionTypeEnum {
    AwsCloudFormation = "AWS_CLOUD_FORMATION",
    AwsService = "AWS_SERVICE"
}
export declare class DescribeResourceCollectionHealthPathParams extends SpeakeasyBase {
    resourceCollectionType: DescribeResourceCollectionHealthResourceCollectionTypeEnum;
}
export declare class DescribeResourceCollectionHealthQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class DescribeResourceCollectionHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeResourceCollectionHealthRequest extends SpeakeasyBase {
    pathParams: DescribeResourceCollectionHealthPathParams;
    queryParams: DescribeResourceCollectionHealthQueryParams;
    headers: DescribeResourceCollectionHealthHeaders;
}
export declare class DescribeResourceCollectionHealthResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeResourceCollectionHealthResponse?: shared.DescribeResourceCollectionHealthResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
