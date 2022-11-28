import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPipelinesQueryParams extends SpeakeasyBase {
    ascending?: string;
    pageToken?: string;
}
export declare class ListPipelinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPipelinesRequest extends SpeakeasyBase {
    queryParams: ListPipelinesQueryParams;
    headers: ListPipelinesHeaders;
}
export declare class ListPipelinesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    listPipelinesResponse?: shared.ListPipelinesResponse;
    statusCode: number;
    validationException?: any;
}
