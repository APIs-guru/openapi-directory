import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RejectSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416RejectSharedDirectory = "DirectoryService_20150416.RejectSharedDirectory"
}
export declare class RejectSharedDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectSharedDirectoryXAmzTargetEnum;
}
export declare class RejectSharedDirectoryRequest extends SpeakeasyBase {
    headers: RejectSharedDirectoryHeaders;
    request: shared.RejectSharedDirectoryRequest;
}
export declare class RejectSharedDirectoryResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryAlreadySharedException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    rejectSharedDirectoryResult?: shared.RejectSharedDirectoryResult;
    serviceException?: any;
    statusCode: number;
}
