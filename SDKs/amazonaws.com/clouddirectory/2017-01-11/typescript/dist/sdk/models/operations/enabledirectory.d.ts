import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class EnableDirectoryRequest extends SpeakeasyBase {
    headers: EnableDirectoryHeaders;
}
export declare class EnableDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryDeletedException?: any;
    enableDirectoryResponse?: shared.EnableDirectoryResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
