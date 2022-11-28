import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListInstanceProfilesXAmzTargetEnum {
    DeviceFarm20150623ListInstanceProfiles = "DeviceFarm_20150623.ListInstanceProfiles"
}
export declare class ListInstanceProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstanceProfilesXAmzTargetEnum;
}
export declare class ListInstanceProfilesRequest extends SpeakeasyBase {
    headers: ListInstanceProfilesHeaders;
    request: shared.ListInstanceProfilesRequest;
}
export declare class ListInstanceProfilesResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listInstanceProfilesResult?: shared.ListInstanceProfilesResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
