import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDocumentClassificationJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDocumentClassificationJobsXAmzTargetEnum {
    Comprehend20171127ListDocumentClassificationJobs = "Comprehend_20171127.ListDocumentClassificationJobs"
}
export declare class ListDocumentClassificationJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDocumentClassificationJobsXAmzTargetEnum;
}
export declare class ListDocumentClassificationJobsRequest extends SpeakeasyBase {
    queryParams: ListDocumentClassificationJobsQueryParams;
    headers: ListDocumentClassificationJobsHeaders;
    request: shared.ListDocumentClassificationJobsRequest;
}
export declare class ListDocumentClassificationJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listDocumentClassificationJobsResponse?: shared.ListDocumentClassificationJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
