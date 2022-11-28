import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAppsListXAmzTargetEnum {
    Awsfms20180101GetAppsList = "AWSFMS_20180101.GetAppsList"
}
export declare class GetAppsListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppsListXAmzTargetEnum;
}
export declare class GetAppsListRequest extends SpeakeasyBase {
    headers: GetAppsListHeaders;
    request: shared.GetAppsListRequest;
}
export declare class GetAppsListResponse extends SpeakeasyBase {
    contentType: string;
    getAppsListResponse?: shared.GetAppsListResponse;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
