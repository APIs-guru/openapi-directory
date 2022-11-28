import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFileSystemXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DeleteFileSystem = "AWSSimbaAPIService_v20180301.DeleteFileSystem"
}
export declare class DeleteFileSystemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFileSystemXAmzTargetEnum;
}
export declare class DeleteFileSystemRequest extends SpeakeasyBase {
    headers: DeleteFileSystemHeaders;
    request: shared.DeleteFileSystemRequest;
}
export declare class DeleteFileSystemResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    deleteFileSystemResponse?: shared.DeleteFileSystemResponse;
    fileSystemNotFound?: any;
    incompatibleParameterError?: any;
    internalServerError?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
}
