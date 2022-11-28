import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTargetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTargetsRequestBody extends SpeakeasyBase {
    filters?: shared.ListTargetsFilter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTargetsRequest extends SpeakeasyBase {
    queryParams: ListTargetsQueryParams;
    headers: ListTargetsHeaders;
    request: ListTargetsRequestBody;
}
export declare class ListTargetsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listTargetsResult?: shared.ListTargetsResult;
    statusCode: number;
    validationException?: any;
}
