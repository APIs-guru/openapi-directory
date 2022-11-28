import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListObjectChildrenQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListObjectChildrenXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListObjectChildrenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: ListObjectChildrenXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListObjectChildrenRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectChildrenRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ListObjectChildrenRequestBodyObjectReference;
}
export declare class ListObjectChildrenRequest extends SpeakeasyBase {
    queryParams: ListObjectChildrenQueryParams;
    headers: ListObjectChildrenHeaders;
    request: ListObjectChildrenRequestBody;
}
export declare class ListObjectChildrenResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listObjectChildrenResponse?: shared.ListObjectChildrenResponse;
    notNodeException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
