import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListClustersQueryParams extends SpeakeasyBase {
    include?: string[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListClustersRequest extends SpeakeasyBase {
    queryParams: ListClustersQueryParams;
    headers: ListClustersHeaders;
}
export declare class ListClustersResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listClustersResponse?: shared.ListClustersResponse;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
