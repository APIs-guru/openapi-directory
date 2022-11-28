import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListNetworkProfilesXAmzTargetEnum {
    DeviceFarm20150623ListNetworkProfiles = "DeviceFarm_20150623.ListNetworkProfiles"
}
export declare class ListNetworkProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNetworkProfilesXAmzTargetEnum;
}
export declare class ListNetworkProfilesRequest extends SpeakeasyBase {
    headers: ListNetworkProfilesHeaders;
    request: shared.ListNetworkProfilesRequest;
}
export declare class ListNetworkProfilesResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listNetworkProfilesResult?: shared.ListNetworkProfilesResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
