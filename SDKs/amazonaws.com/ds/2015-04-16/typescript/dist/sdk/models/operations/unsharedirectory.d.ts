import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UnshareDirectoryXAmzTargetEnum {
    DirectoryService20150416UnshareDirectory = "DirectoryService_20150416.UnshareDirectory"
}
export declare class UnshareDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnshareDirectoryXAmzTargetEnum;
}
export declare class UnshareDirectoryRequest extends SpeakeasyBase {
    headers: UnshareDirectoryHeaders;
    request: shared.UnshareDirectoryRequest;
}
export declare class UnshareDirectoryResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryNotSharedException?: any;
    entityDoesNotExistException?: any;
    invalidTargetException?: any;
    serviceException?: any;
    statusCode: number;
    unshareDirectoryResult?: shared.UnshareDirectoryResult;
}
