import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListUserProfilesXAmzTargetEnum {
    CodeStar20170419ListUserProfiles = "CodeStar_20170419.ListUserProfiles"
}
export declare class ListUserProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUserProfilesXAmzTargetEnum;
}
export declare class ListUserProfilesRequest extends SpeakeasyBase {
    headers: ListUserProfilesHeaders;
    request: shared.ListUserProfilesRequest;
}
export declare class ListUserProfilesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listUserProfilesResult?: shared.ListUserProfilesResult;
    statusCode: number;
    validationException?: any;
}
