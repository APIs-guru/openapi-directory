import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeParameterGroupsXAmzTargetEnum {
    AmazonDaxv3DescribeParameterGroups = "AmazonDAXV3.DescribeParameterGroups"
}
export declare class DescribeParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeParameterGroupsXAmzTargetEnum;
}
export declare class DescribeParameterGroupsRequest extends SpeakeasyBase {
    headers: DescribeParameterGroupsHeaders;
    request: shared.DescribeParameterGroupsRequest;
}
export declare class DescribeParameterGroupsResponse extends SpeakeasyBase {
    contentType: string;
    describeParameterGroupsResponse?: shared.DescribeParameterGroupsResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
