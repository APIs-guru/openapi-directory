import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDocumentClassificationJobXAmzTargetEnum {
    Comprehend20171127DescribeDocumentClassificationJob = "Comprehend_20171127.DescribeDocumentClassificationJob"
}
export declare class DescribeDocumentClassificationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentClassificationJobXAmzTargetEnum;
}
export declare class DescribeDocumentClassificationJobRequest extends SpeakeasyBase {
    headers: DescribeDocumentClassificationJobHeaders;
    request: shared.DescribeDocumentClassificationJobRequest;
}
export declare class DescribeDocumentClassificationJobResponse extends SpeakeasyBase {
    contentType: string;
    describeDocumentClassificationJobResponse?: shared.DescribeDocumentClassificationJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
