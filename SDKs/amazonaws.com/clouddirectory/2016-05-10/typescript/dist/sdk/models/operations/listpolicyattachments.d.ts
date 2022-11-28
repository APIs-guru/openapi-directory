import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPolicyAttachmentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPolicyAttachmentsXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListPolicyAttachmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: ListPolicyAttachmentsXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListPolicyAttachmentsRequestBodyPolicyReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListPolicyAttachmentsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    policyReference: ListPolicyAttachmentsRequestBodyPolicyReference;
}
export declare class ListPolicyAttachmentsRequest extends SpeakeasyBase {
    queryParams: ListPolicyAttachmentsQueryParams;
    headers: ListPolicyAttachmentsHeaders;
    request: ListPolicyAttachmentsRequestBody;
}
export declare class ListPolicyAttachmentsResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listPolicyAttachmentsResponse?: shared.ListPolicyAttachmentsResponse;
    notPolicyException?: shared.NotPolicyException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
