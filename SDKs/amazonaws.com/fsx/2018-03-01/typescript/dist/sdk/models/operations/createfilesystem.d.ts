import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFileSystemXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateFileSystem = "AWSSimbaAPIService_v20180301.CreateFileSystem"
}
export declare class CreateFileSystemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFileSystemXAmzTargetEnum;
}
export declare class CreateFileSystemRequest extends SpeakeasyBase {
    headers: CreateFileSystemHeaders;
    request: shared.CreateFileSystemRequest;
}
export declare class CreateFileSystemResponse extends SpeakeasyBase {
    activeDirectoryError?: any;
    badRequest?: any;
    contentType: string;
    createFileSystemResponse?: shared.CreateFileSystemResponse;
    incompatibleParameterError?: any;
    internalServerError?: any;
    invalidExportPath?: any;
    invalidImportPath?: any;
    invalidNetworkSettings?: any;
    invalidPerUnitStorageThroughput?: any;
    missingFileSystemConfiguration?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
}
