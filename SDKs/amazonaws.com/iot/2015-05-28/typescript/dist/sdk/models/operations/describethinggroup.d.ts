import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class DescribeThingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeThingGroupRequest extends SpeakeasyBase {
    pathParams: DescribeThingGroupPathParams;
    headers: DescribeThingGroupHeaders;
}
export declare class DescribeThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeThingGroupResponse?: shared.DescribeThingGroupResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
