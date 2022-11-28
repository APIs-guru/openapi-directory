import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623DeleteNetworkProfile = "DeviceFarm_20150623.DeleteNetworkProfile"
}
export declare class DeleteNetworkProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNetworkProfileXAmzTargetEnum;
}
export declare class DeleteNetworkProfileRequest extends SpeakeasyBase {
    headers: DeleteNetworkProfileHeaders;
    request: shared.DeleteNetworkProfileRequest;
}
export declare class DeleteNetworkProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteNetworkProfileResult?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
