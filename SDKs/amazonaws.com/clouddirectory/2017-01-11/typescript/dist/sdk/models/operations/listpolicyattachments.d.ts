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
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listPolicyAttachmentsResponse?: shared.ListPolicyAttachmentsResponse;
    notPolicyException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
