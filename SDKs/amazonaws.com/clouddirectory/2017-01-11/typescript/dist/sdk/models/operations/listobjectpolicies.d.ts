import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListObjectPoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListObjectPoliciesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListObjectPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: ListObjectPoliciesXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListObjectPoliciesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectPoliciesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ListObjectPoliciesRequestBodyObjectReference;
}
export declare class ListObjectPoliciesRequest extends SpeakeasyBase {
    queryParams: ListObjectPoliciesQueryParams;
    headers: ListObjectPoliciesHeaders;
    request: ListObjectPoliciesRequestBody;
}
export declare class ListObjectPoliciesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listObjectPoliciesResponse?: shared.ListObjectPoliciesResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
