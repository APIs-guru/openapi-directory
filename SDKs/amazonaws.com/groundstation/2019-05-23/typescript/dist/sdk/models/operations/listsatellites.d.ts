import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSatellitesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListSatellitesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSatellitesRequest extends SpeakeasyBase {
    queryParams: ListSatellitesQueryParams;
    headers: ListSatellitesHeaders;
}
export declare class ListSatellitesResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    listSatellitesResponse?: shared.ListSatellitesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
