import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDatasetsPathParams extends SpeakeasyBase {
    identityId: string;
    identityPoolId: string;
}
export declare class ListDatasetsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDatasetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDatasetsRequest extends SpeakeasyBase {
    pathParams: ListDatasetsPathParams;
    queryParams: ListDatasetsQueryParams;
    headers: ListDatasetsHeaders;
}
export declare class ListDatasetsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listDatasetsResponse?: shared.ListDatasetsResponse;
    notAuthorizedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
