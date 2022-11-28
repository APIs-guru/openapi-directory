import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUploadXAmzTargetEnum {
    DeviceFarm20150623CreateUpload = "DeviceFarm_20150623.CreateUpload"
}
export declare class CreateUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUploadXAmzTargetEnum;
}
export declare class CreateUploadRequest extends SpeakeasyBase {
    headers: CreateUploadHeaders;
    request: shared.CreateUploadRequest;
}
export declare class CreateUploadResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createUploadResult?: shared.CreateUploadResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
