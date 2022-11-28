import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUploadXAmzTargetEnum {
    DeviceFarm20150623DeleteUpload = "DeviceFarm_20150623.DeleteUpload"
}
export declare class DeleteUploadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUploadXAmzTargetEnum;
}
export declare class DeleteUploadRequest extends SpeakeasyBase {
    headers: DeleteUploadHeaders;
    request: shared.DeleteUploadRequest;
}
export declare class DeleteUploadResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteUploadResult?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
