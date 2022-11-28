import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDocumentClassifierXAmzTargetEnum {
    Comprehend20171127DescribeDocumentClassifier = "Comprehend_20171127.DescribeDocumentClassifier"
}
export declare class DescribeDocumentClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentClassifierXAmzTargetEnum;
}
export declare class DescribeDocumentClassifierRequest extends SpeakeasyBase {
    headers: DescribeDocumentClassifierHeaders;
    request: shared.DescribeDocumentClassifierRequest;
}
export declare class DescribeDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    describeDocumentClassifierResponse?: shared.DescribeDocumentClassifierResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
