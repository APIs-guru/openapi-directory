import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUploadXAmzTargetEnum {
    DeviceFarm20150623GetUpload = "DeviceFarm_20150623.GetUpload"
}
export declare class GetUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUploadXAmzTargetEnum;
}
export declare class GetUploadRequest extends SpeakeasyBase {
    headers: GetUploadHeaders;
    request: shared.GetUploadRequest;
}
export declare class GetUploadResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getUploadResult?: shared.GetUploadResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
