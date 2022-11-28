import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateObjectHeaders extends SpeakeasyBase {
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
export declare class CreateObjectRequestBodyParentReference extends SpeakeasyBase {
    selector?: string;
}
export declare class CreateObjectRequestBody extends SpeakeasyBase {
    linkName?: string;
    objectAttributeList?: shared.AttributeKeyAndValue[];
    parentReference?: CreateObjectRequestBodyParentReference;
    schemaFacets: shared.SchemaFacet[];
}
export declare class CreateObjectRequest extends SpeakeasyBase {
    headers: CreateObjectHeaders;
    request: CreateObjectRequestBody;
}
export declare class CreateObjectResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createObjectResponse?: shared.CreateObjectResponse;
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
