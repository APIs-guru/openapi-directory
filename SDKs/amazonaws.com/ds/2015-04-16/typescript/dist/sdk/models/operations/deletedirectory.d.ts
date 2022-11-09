import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteDirectoryXAmzTargetEnum {
    DirectoryService20150416DeleteDirectory = "DirectoryService_20150416.DeleteDirectory"
}
export declare class DeleteDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectoryXAmzTargetEnum;
}
export declare class DeleteDirectoryRequest extends SpeakeasyBase {
    headers: DeleteDirectoryHeaders;
    request: shared.DeleteDirectoryRequest;
}
export declare class DeleteDirectoryResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteDirectoryResult?: shared.DeleteDirectoryResult;
    entityDoesNotExistException?: any;
    serviceException?: any;
    statusCode: number;
}
