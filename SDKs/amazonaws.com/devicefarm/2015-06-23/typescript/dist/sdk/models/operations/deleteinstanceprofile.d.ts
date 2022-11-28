import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInstanceProfileXAmzTargetEnum {
    DeviceFarm20150623DeleteInstanceProfile = "DeviceFarm_20150623.DeleteInstanceProfile"
}
export declare class DeleteInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInstanceProfileXAmzTargetEnum;
}
export declare class DeleteInstanceProfileRequest extends SpeakeasyBase {
    headers: DeleteInstanceProfileHeaders;
    request: shared.DeleteInstanceProfileRequest;
}
export declare class DeleteInstanceProfileResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteInstanceProfileResult?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
