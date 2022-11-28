import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEntityRecognizerXAmzTargetEnum {
    Comprehend20171127DescribeEntityRecognizer = "Comprehend_20171127.DescribeEntityRecognizer"
}
export declare class DescribeEntityRecognizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEntityRecognizerXAmzTargetEnum;
}
export declare class DescribeEntityRecognizerRequest extends SpeakeasyBase {
    headers: DescribeEntityRecognizerHeaders;
    request: shared.DescribeEntityRecognizerRequest;
}
export declare class DescribeEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    describeEntityRecognizerResponse?: shared.DescribeEntityRecognizerResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
