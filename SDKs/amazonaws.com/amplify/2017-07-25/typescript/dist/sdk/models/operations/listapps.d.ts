import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAppsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAppsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAppsRequest extends SpeakeasyBase {
    queryParams: ListAppsQueryParams;
    headers: ListAppsHeaders;
}
export declare class ListAppsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listAppsResult?: shared.ListAppsResult;
    statusCode: number;
    unauthorizedException?: any;
}
