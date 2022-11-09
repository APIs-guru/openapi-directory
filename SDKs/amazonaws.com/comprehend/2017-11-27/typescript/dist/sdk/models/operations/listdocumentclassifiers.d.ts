import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDocumentClassifiersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDocumentClassifiersXAmzTargetEnum {
    Comprehend20171127ListDocumentClassifiers = "Comprehend_20171127.ListDocumentClassifiers"
}
export declare class ListDocumentClassifiersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDocumentClassifiersXAmzTargetEnum;
}
export declare class ListDocumentClassifiersRequest extends SpeakeasyBase {
    queryParams: ListDocumentClassifiersQueryParams;
    headers: ListDocumentClassifiersHeaders;
    request: shared.ListDocumentClassifiersRequest;
}
export declare class ListDocumentClassifiersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listDocumentClassifiersResponse?: shared.ListDocumentClassifiersResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
