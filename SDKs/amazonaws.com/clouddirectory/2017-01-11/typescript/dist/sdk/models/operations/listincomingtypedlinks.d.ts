import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIncomingTypedLinksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare enum ListIncomingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export declare class ListIncomingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
    schemaArn?: string;
    typedLinkName?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListIncomingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListIncomingTypedLinksRequestBody extends SpeakeasyBase {
    consistencyLevel?: ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;
    filterAttributeRanges?: shared.TypedLinkAttributeRange[];
    filterTypedLink?: ListIncomingTypedLinksRequestBodyFilterTypedLink;
    maxResults?: number;
    nextToken?: string;
    objectReference: ListIncomingTypedLinksRequestBodyObjectReference;
}
export declare class ListIncomingTypedLinksRequest extends SpeakeasyBase {
    headers: ListIncomingTypedLinksHeaders;
    request: ListIncomingTypedLinksRequestBody;
}
export declare class ListIncomingTypedLinksResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listIncomingTypedLinksResponse?: shared.ListIncomingTypedLinksResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
