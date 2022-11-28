import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFileSystemXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UpdateFileSystem = "AWSSimbaAPIService_v20180301.UpdateFileSystem"
}
export declare class UpdateFileSystemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFileSystemXAmzTargetEnum;
}
export declare class UpdateFileSystemRequest extends SpeakeasyBase {
    headers: UpdateFileSystemHeaders;
    request: shared.UpdateFileSystemRequest;
}
export declare class UpdateFileSystemResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    incompatibleParameterError?: any;
    internalServerError?: any;
    missingFileSystemConfiguration?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
    unsupportedOperation?: any;
    updateFileSystemResponse?: shared.UpdateFileSystemResponse;
}
