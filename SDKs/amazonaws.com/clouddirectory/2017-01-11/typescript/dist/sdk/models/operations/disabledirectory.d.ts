import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class DisableDirectoryRequest extends SpeakeasyBase {
    headers: DisableDirectoryHeaders;
}
export declare class DisableDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryDeletedException?: any;
    disableDirectoryResponse?: shared.DisableDirectoryResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
