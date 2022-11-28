import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeResourceGroupsXAmzTargetEnum {
    InspectorServiceDescribeResourceGroups = "InspectorService.DescribeResourceGroups"
}
export declare class DescribeResourceGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourceGroupsXAmzTargetEnum;
}
export declare class DescribeResourceGroupsRequest extends SpeakeasyBase {
    headers: DescribeResourceGroupsHeaders;
    request: shared.DescribeResourceGroupsRequest;
}
export declare class DescribeResourceGroupsResponse extends SpeakeasyBase {
    contentType: string;
    describeResourceGroupsResponse?: shared.DescribeResourceGroupsResponse;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
