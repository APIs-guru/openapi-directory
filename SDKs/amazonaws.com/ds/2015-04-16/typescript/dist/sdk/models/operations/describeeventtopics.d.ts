import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeEventTopicsXAmzTargetEnum {
    DirectoryService20150416DescribeEventTopics = "DirectoryService_20150416.DescribeEventTopics"
}
export declare class DescribeEventTopicsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventTopicsXAmzTargetEnum;
}
export declare class DescribeEventTopicsRequest extends SpeakeasyBase {
    headers: DescribeEventTopicsHeaders;
    request: shared.DescribeEventTopicsRequest;
}
export declare class DescribeEventTopicsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeEventTopicsResult?: shared.DescribeEventTopicsResult;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
