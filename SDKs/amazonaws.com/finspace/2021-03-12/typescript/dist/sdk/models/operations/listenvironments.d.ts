import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListEnvironmentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEnvironmentsRequest extends SpeakeasyBase {
    queryParams: ListEnvironmentsQueryParams;
    headers: ListEnvironmentsHeaders;
}
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listEnvironmentsResponse?: shared.ListEnvironmentsResponse;
    statusCode: number;
    validationException?: any;
}
