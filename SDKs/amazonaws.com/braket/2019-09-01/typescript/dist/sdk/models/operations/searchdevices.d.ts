import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchDevicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class SearchDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchDevicesRequestBody extends SpeakeasyBase {
    filters: shared.SearchDevicesFilter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class SearchDevicesRequest extends SpeakeasyBase {
    queryParams: SearchDevicesQueryParams;
    headers: SearchDevicesHeaders;
    request: SearchDevicesRequestBody;
}
export declare class SearchDevicesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    searchDevicesResponse?: shared.SearchDevicesResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
