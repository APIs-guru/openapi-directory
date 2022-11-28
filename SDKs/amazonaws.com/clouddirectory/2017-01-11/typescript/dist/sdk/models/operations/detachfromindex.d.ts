import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetachFromIndexHeaders extends SpeakeasyBase {
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
export declare class DetachFromIndexRequestBodyIndexReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class DetachFromIndexRequestBodyTargetReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DetachFromIndexRequestBody extends SpeakeasyBase {
    indexReference: DetachFromIndexRequestBodyIndexReference;
    targetReference: DetachFromIndexRequestBodyTargetReference;
}
export declare class DetachFromIndexRequest extends SpeakeasyBase {
    headers: DetachFromIndexHeaders;
    request: DetachFromIndexRequestBody;
}
export declare class DetachFromIndexResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detachFromIndexResponse?: shared.DetachFromIndexResponse;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    notIndexException?: any;
    objectAlreadyDetachedException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
