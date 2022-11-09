import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListExperimentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListExperimentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListExperimentsRequest extends SpeakeasyBase {
    queryParams: ListExperimentsQueryParams;
    headers: ListExperimentsHeaders;
}
export declare class ListExperimentsResponse extends SpeakeasyBase {
    contentType: string;
    listExperimentsResponse?: shared.ListExperimentsResponse;
    statusCode: number;
    validationException?: any;
}
