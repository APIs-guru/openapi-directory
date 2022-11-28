import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeServiceXAmzTargetEnum {
    AppRunnerDescribeService = "AppRunner.DescribeService"
}
export declare class DescribeServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceXAmzTargetEnum;
}
export declare class DescribeServiceRequest extends SpeakeasyBase {
    headers: DescribeServiceHeaders;
    request: shared.DescribeServiceRequest;
}
export declare class DescribeServiceResponse extends SpeakeasyBase {
    contentType: string;
    describeServiceResponse?: shared.DescribeServiceResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
