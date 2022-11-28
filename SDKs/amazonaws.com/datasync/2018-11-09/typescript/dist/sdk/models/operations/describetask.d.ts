import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTaskXAmzTargetEnum {
    FmrsServiceDescribeTask = "FmrsService.DescribeTask"
}
export declare class DescribeTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskXAmzTargetEnum;
}
export declare class DescribeTaskRequest extends SpeakeasyBase {
    headers: DescribeTaskHeaders;
    request: shared.DescribeTaskRequest;
}
export declare class DescribeTaskResponse extends SpeakeasyBase {
    contentType: string;
    describeTaskResponse?: shared.DescribeTaskResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
