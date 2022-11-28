import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeGroupXAmzTargetEnum {
    AwsIdentityStoreDescribeGroup = "AWSIdentityStore.DescribeGroup"
}
export declare class DescribeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGroupXAmzTargetEnum;
}
export declare class DescribeGroupRequest extends SpeakeasyBase {
    headers: DescribeGroupHeaders;
    request: shared.DescribeGroupRequest;
}
export declare class DescribeGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeGroupResponse?: shared.DescribeGroupResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
