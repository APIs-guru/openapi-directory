import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListUpdatesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ListUpdatesQueryParams extends SpeakeasyBase {
    addonName?: string;
    maxResults?: number;
    nextToken?: string;
    nodegroupName?: string;
}
export declare class ListUpdatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListUpdatesRequest extends SpeakeasyBase {
    pathParams: ListUpdatesPathParams;
    queryParams: ListUpdatesQueryParams;
    headers: ListUpdatesHeaders;
}
export declare class ListUpdatesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listUpdatesResponse?: shared.ListUpdatesResponse;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
