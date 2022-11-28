import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class CreateIndexRequestBodyParentReference extends SpeakeasyBase {
    selector?: string;
}
export declare class CreateIndexRequestBody extends SpeakeasyBase {
    isUnique: boolean;
    linkName?: string;
    orderedIndexedAttributeList: shared.AttributeKey[];
    parentReference?: CreateIndexRequestBodyParentReference;
}
export declare class CreateIndexRequest extends SpeakeasyBase {
    headers: CreateIndexHeaders;
    request: CreateIndexRequestBody;
}
export declare class CreateIndexResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    createIndexResponse?: shared.CreateIndexResponse;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    unsupportedIndexTypeException?: shared.UnsupportedIndexTypeException;
    validationException?: shared.ValidationException;
}
