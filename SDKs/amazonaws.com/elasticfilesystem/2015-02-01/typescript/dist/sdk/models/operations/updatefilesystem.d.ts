import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFileSystemPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class UpdateFileSystemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateFileSystemRequestBodyThroughputModeEnum {
    Bursting = "bursting",
    Provisioned = "provisioned"
}
export declare class UpdateFileSystemRequestBody extends SpeakeasyBase {
    provisionedThroughputInMibps?: number;
    throughputMode?: UpdateFileSystemRequestBodyThroughputModeEnum;
}
export declare class UpdateFileSystemRequest extends SpeakeasyBase {
    pathParams: UpdateFileSystemPathParams;
    headers: UpdateFileSystemHeaders;
    request: UpdateFileSystemRequestBody;
}
export declare class UpdateFileSystemResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemDescription?: shared.FileSystemDescription;
    fileSystemNotFound?: any;
    incorrectFileSystemLifeCycleState?: any;
    insufficientThroughputCapacity?: any;
    internalServerError?: any;
    statusCode: number;
    throughputLimitExceeded?: any;
    tooManyRequests?: any;
}
