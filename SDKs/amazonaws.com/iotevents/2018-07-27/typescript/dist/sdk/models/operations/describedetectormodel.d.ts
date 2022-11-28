import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDetectorModelPathParams extends SpeakeasyBase {
    detectorModelName: string;
}
export declare class DescribeDetectorModelQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class DescribeDetectorModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDetectorModelRequest extends SpeakeasyBase {
    pathParams: DescribeDetectorModelPathParams;
    queryParams: DescribeDetectorModelQueryParams;
    headers: DescribeDetectorModelHeaders;
}
export declare class DescribeDetectorModelResponse extends SpeakeasyBase {
    contentType: string;
    describeDetectorModelResponse?: shared.DescribeDetectorModelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
