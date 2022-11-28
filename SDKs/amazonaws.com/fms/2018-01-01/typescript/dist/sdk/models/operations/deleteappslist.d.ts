import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAppsListXAmzTargetEnum {
    Awsfms20180101DeleteAppsList = "AWSFMS_20180101.DeleteAppsList"
}
export declare class DeleteAppsListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppsListXAmzTargetEnum;
}
export declare class DeleteAppsListRequest extends SpeakeasyBase {
    headers: DeleteAppsListHeaders;
    request: shared.DeleteAppsListRequest;
}
export declare class DeleteAppsListResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
