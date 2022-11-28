import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAddonsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ListAddonsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAddonsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAddonsRequest extends SpeakeasyBase {
    pathParams: ListAddonsPathParams;
    queryParams: ListAddonsQueryParams;
    headers: ListAddonsHeaders;
}
export declare class ListAddonsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    listAddonsResponse?: shared.ListAddonsResponse;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
