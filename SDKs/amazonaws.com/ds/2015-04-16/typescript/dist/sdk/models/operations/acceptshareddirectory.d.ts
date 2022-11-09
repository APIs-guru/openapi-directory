import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AcceptSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416AcceptSharedDirectory = "DirectoryService_20150416.AcceptSharedDirectory"
}
export declare class AcceptSharedDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptSharedDirectoryXAmzTargetEnum;
}
export declare class AcceptSharedDirectoryRequest extends SpeakeasyBase {
    headers: AcceptSharedDirectoryHeaders;
    request: shared.AcceptSharedDirectoryRequest;
}
export declare class AcceptSharedDirectoryResponse extends SpeakeasyBase {
    acceptSharedDirectoryResult?: shared.AcceptSharedDirectoryResult;
    clientException?: any;
    contentType: string;
    directoryAlreadySharedException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
