import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFileSystemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateFileSystemRequestBodyPerformanceModeEnum {
    GeneralPurpose = "generalPurpose",
    MaxIo = "maxIO"
}
export declare enum CreateFileSystemRequestBodyThroughputModeEnum {
    Bursting = "bursting",
    Provisioned = "provisioned"
}
export declare class CreateFileSystemRequestBody extends SpeakeasyBase {
    availabilityZoneName?: string;
    backup?: boolean;
    creationToken: string;
    encrypted?: boolean;
    kmsKeyId?: string;
    performanceMode?: CreateFileSystemRequestBodyPerformanceModeEnum;
    provisionedThroughputInMibps?: number;
    tags?: shared.Tag[];
    throughputMode?: CreateFileSystemRequestBodyThroughputModeEnum;
}
export declare class CreateFileSystemRequest extends SpeakeasyBase {
    headers: CreateFileSystemHeaders;
    request: CreateFileSystemRequestBody;
}
export declare class CreateFileSystemResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemAlreadyExists?: any;
    fileSystemDescription?: shared.FileSystemDescription;
    fileSystemLimitExceeded?: any;
    insufficientThroughputCapacity?: any;
    internalServerError?: any;
    statusCode: number;
    throughputLimitExceeded?: any;
    unsupportedAvailabilityZone?: any;
}
