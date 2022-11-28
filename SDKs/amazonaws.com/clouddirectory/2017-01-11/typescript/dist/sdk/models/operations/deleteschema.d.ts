import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class DeleteSchemaRequest extends SpeakeasyBase {
    headers: DeleteSchemaHeaders;
}
export declare class DeleteSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteSchemaResponse?: shared.DeleteSchemaResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    stillContainsLinksException?: any;
    validationException?: any;
}
