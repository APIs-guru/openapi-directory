import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDirectoryXAmzTargetEnum {
    DirectoryService20150416CreateDirectory = "DirectoryService_20150416.CreateDirectory"
}
export declare class CreateDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectoryXAmzTargetEnum;
}
export declare class CreateDirectoryRequest extends SpeakeasyBase {
    headers: CreateDirectoryHeaders;
    request: shared.CreateDirectoryRequest;
}
export declare class CreateDirectoryResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createDirectoryResult?: shared.CreateDirectoryResult;
    directoryLimitExceededException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
