import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListApiKeysPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class ListApiKeysQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListApiKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListApiKeysRequest extends SpeakeasyBase {
    pathParams: ListApiKeysPathParams;
    queryParams: ListApiKeysQueryParams;
    headers: ListApiKeysHeaders;
}
export declare class ListApiKeysResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listApiKeysResponse?: shared.ListApiKeysResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
