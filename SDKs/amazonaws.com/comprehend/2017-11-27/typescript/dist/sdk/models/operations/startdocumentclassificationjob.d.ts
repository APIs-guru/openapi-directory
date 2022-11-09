import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartDocumentClassificationJobXAmzTargetEnum {
    Comprehend20171127StartDocumentClassificationJob = "Comprehend_20171127.StartDocumentClassificationJob"
}
export declare class StartDocumentClassificationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDocumentClassificationJobXAmzTargetEnum;
}
export declare class StartDocumentClassificationJobRequest extends SpeakeasyBase {
    headers: StartDocumentClassificationJobHeaders;
    request: shared.StartDocumentClassificationJobRequest;
}
export declare class StartDocumentClassificationJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    startDocumentClassificationJobResponse?: shared.StartDocumentClassificationJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
