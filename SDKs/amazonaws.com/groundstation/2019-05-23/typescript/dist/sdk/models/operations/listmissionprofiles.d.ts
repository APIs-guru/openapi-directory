import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMissionProfilesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListMissionProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMissionProfilesRequest extends SpeakeasyBase {
    queryParams: ListMissionProfilesQueryParams;
    headers: ListMissionProfilesHeaders;
}
export declare class ListMissionProfilesResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    listMissionProfilesResponse?: shared.ListMissionProfilesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
