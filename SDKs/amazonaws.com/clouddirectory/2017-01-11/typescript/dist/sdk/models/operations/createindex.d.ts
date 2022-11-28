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
    accessDeniedException?: any;
    contentType: string;
    createIndexResponse?: shared.CreateIndexResponse;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    linkNameAlreadyInUseException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    unsupportedIndexTypeException?: any;
    validationException?: any;
}
