import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class DeleteDirectoryRequest extends SpeakeasyBase {
    headers: DeleteDirectoryHeaders;
}
export declare class DeleteDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteDirectoryResponse?: shared.DeleteDirectoryResponse;
    directoryDeletedException?: any;
    directoryNotDisabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
