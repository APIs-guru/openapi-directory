import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUploadXAmzTargetEnum {
    DeviceFarm20150623UpdateUpload = "DeviceFarm_20150623.UpdateUpload"
}
export declare class UpdateUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUploadXAmzTargetEnum;
}
export declare class UpdateUploadRequest extends SpeakeasyBase {
    headers: UpdateUploadHeaders;
    request: shared.UpdateUploadRequest;
}
export declare class UpdateUploadResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    updateUploadResult?: shared.UpdateUploadResult;
}
