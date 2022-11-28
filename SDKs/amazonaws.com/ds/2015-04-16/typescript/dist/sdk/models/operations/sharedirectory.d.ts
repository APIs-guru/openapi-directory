import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ShareDirectoryXAmzTargetEnum {
    DirectoryService20150416ShareDirectory = "DirectoryService_20150416.ShareDirectory"
}
export declare class ShareDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ShareDirectoryXAmzTargetEnum;
}
export declare class ShareDirectoryRequest extends SpeakeasyBase {
    headers: ShareDirectoryHeaders;
    request: shared.ShareDirectoryRequest;
}
export declare class ShareDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    directoryAlreadySharedException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    invalidTargetException?: any;
    organizationsException?: any;
    serviceException?: any;
    shareDirectoryResult?: shared.ShareDirectoryResult;
    shareLimitExceededException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
