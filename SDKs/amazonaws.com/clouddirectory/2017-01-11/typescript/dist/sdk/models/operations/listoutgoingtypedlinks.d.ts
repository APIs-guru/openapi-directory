import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOutgoingTypedLinksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare enum ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export declare class ListOutgoingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
    schemaArn?: string;
    typedLinkName?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListOutgoingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListOutgoingTypedLinksRequestBody extends SpeakeasyBase {
    consistencyLevel?: ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum;
    filterAttributeRanges?: shared.TypedLinkAttributeRange[];
    filterTypedLink?: ListOutgoingTypedLinksRequestBodyFilterTypedLink;
    maxResults?: number;
    nextToken?: string;
    objectReference: ListOutgoingTypedLinksRequestBodyObjectReference;
}
export declare class ListOutgoingTypedLinksRequest extends SpeakeasyBase {
    headers: ListOutgoingTypedLinksHeaders;
    request: ListOutgoingTypedLinksRequestBody;
}
export declare class ListOutgoingTypedLinksResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listOutgoingTypedLinksResponse?: shared.ListOutgoingTypedLinksResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
