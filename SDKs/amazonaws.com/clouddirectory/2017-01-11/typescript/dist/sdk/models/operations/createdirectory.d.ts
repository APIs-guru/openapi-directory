import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class CreateDirectoryRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CreateDirectoryRequest extends SpeakeasyBase {
    headers: CreateDirectoryHeaders;
    request: CreateDirectoryRequestBody;
}
export declare class CreateDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createDirectoryResponse?: shared.CreateDirectoryResponse;
    directoryAlreadyExistsException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
