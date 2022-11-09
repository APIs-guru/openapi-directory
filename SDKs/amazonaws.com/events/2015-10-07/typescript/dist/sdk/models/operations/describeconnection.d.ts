import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeConnectionXAmzTargetEnum {
    AwsEventsDescribeConnection = "AWSEvents.DescribeConnection"
}
export declare class DescribeConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionXAmzTargetEnum;
}
export declare class DescribeConnectionRequest extends SpeakeasyBase {
    headers: DescribeConnectionHeaders;
    request: shared.DescribeConnectionRequest;
}
export declare class DescribeConnectionResponse extends SpeakeasyBase {
    contentType: string;
    describeConnectionResponse?: shared.DescribeConnectionResponse;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
