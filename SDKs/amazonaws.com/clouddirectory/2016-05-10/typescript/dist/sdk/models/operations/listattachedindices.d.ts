import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAttachedIndicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAttachedIndicesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListAttachedIndicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: ListAttachedIndicesXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListAttachedIndicesRequestBodyTargetReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListAttachedIndicesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    targetReference: ListAttachedIndicesRequestBodyTargetReference;
}
export declare class ListAttachedIndicesRequest extends SpeakeasyBase {
    queryParams: ListAttachedIndicesQueryParams;
    headers: ListAttachedIndicesHeaders;
    request: ListAttachedIndicesRequestBody;
}
export declare class ListAttachedIndicesResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    listAttachedIndicesResponse?: shared.ListAttachedIndicesResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
