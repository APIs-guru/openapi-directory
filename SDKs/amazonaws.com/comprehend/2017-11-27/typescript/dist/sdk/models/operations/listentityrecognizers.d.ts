import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEntityRecognizersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEntityRecognizersXAmzTargetEnum {
    Comprehend20171127ListEntityRecognizers = "Comprehend_20171127.ListEntityRecognizers"
}
export declare class ListEntityRecognizersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEntityRecognizersXAmzTargetEnum;
}
export declare class ListEntityRecognizersRequest extends SpeakeasyBase {
    queryParams: ListEntityRecognizersQueryParams;
    headers: ListEntityRecognizersHeaders;
    request: shared.ListEntityRecognizersRequest;
}
export declare class ListEntityRecognizersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listEntityRecognizersResponse?: shared.ListEntityRecognizersResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
