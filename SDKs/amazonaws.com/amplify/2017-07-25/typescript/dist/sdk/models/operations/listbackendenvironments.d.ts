import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListBackendEnvironmentsPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class ListBackendEnvironmentsQueryParams extends SpeakeasyBase {
    environmentName?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListBackendEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBackendEnvironmentsRequest extends SpeakeasyBase {
    pathParams: ListBackendEnvironmentsPathParams;
    queryParams: ListBackendEnvironmentsQueryParams;
    headers: ListBackendEnvironmentsHeaders;
}
export declare class ListBackendEnvironmentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listBackendEnvironmentsResult?: shared.ListBackendEnvironmentsResult;
    statusCode: number;
    unauthorizedException?: any;
}
