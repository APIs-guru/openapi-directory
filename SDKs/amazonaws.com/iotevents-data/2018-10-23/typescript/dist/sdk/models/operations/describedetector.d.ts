import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDetectorPathParams extends SpeakeasyBase {
    detectorModelName: string;
}
export declare class DescribeDetectorQueryParams extends SpeakeasyBase {
    keyValue?: string;
}
export declare class DescribeDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDetectorRequest extends SpeakeasyBase {
    pathParams: DescribeDetectorPathParams;
    queryParams: DescribeDetectorQueryParams;
    headers: DescribeDetectorHeaders;
}
export declare class DescribeDetectorResponse extends SpeakeasyBase {
    contentType: string;
    describeDetectorResponse?: shared.DescribeDetectorResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
