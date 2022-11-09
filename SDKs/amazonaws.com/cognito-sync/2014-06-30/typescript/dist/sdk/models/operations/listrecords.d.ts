import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRecordsPathParams extends SpeakeasyBase {
    datasetName: string;
    identityId: string;
    identityPoolId: string;
}
export declare class ListRecordsQueryParams extends SpeakeasyBase {
    lastSyncCount?: number;
    maxResults?: number;
    nextToken?: string;
    syncSessionToken?: string;
}
export declare class ListRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRecordsRequest extends SpeakeasyBase {
    pathParams: ListRecordsPathParams;
    queryParams: ListRecordsQueryParams;
    headers: ListRecordsHeaders;
}
export declare class ListRecordsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listRecordsResponse?: shared.ListRecordsResponse;
    notAuthorizedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
