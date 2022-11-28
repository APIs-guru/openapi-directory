import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623CreateNetworkProfile = "DeviceFarm_20150623.CreateNetworkProfile"
}
export declare class CreateNetworkProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNetworkProfileXAmzTargetEnum;
}
export declare class CreateNetworkProfileRequest extends SpeakeasyBase {
    headers: CreateNetworkProfileHeaders;
    request: shared.CreateNetworkProfileRequest;
}
export declare class CreateNetworkProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createNetworkProfileResult?: shared.CreateNetworkProfileResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
