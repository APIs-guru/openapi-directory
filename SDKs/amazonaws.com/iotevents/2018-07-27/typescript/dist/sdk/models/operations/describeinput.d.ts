import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInputPathParams extends SpeakeasyBase {
    inputName: string;
}
export declare class DescribeInputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeInputRequest extends SpeakeasyBase {
    pathParams: DescribeInputPathParams;
    headers: DescribeInputHeaders;
}
export declare class DescribeInputResponse extends SpeakeasyBase {
    contentType: string;
    describeInputResponse?: shared.DescribeInputResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
