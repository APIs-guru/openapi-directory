import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFargateProfilesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ListFargateProfilesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListFargateProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFargateProfilesRequest extends SpeakeasyBase {
    pathParams: ListFargateProfilesPathParams;
    queryParams: ListFargateProfilesQueryParams;
    headers: ListFargateProfilesHeaders;
}
export declare class ListFargateProfilesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listFargateProfilesResponse?: shared.ListFargateProfilesResponse;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
