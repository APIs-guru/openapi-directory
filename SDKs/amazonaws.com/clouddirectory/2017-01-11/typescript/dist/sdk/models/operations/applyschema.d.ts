import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplySchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class ApplySchemaRequestBody extends SpeakeasyBase {
    publishedSchemaArn: string;
}
export declare class ApplySchemaRequest extends SpeakeasyBase {
    headers: ApplySchemaHeaders;
    request: ApplySchemaRequestBody;
}
export declare class ApplySchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    applySchemaResponse?: shared.ApplySchemaResponse;
    contentType: string;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidAttachmentException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    schemaAlreadyExistsException?: any;
    statusCode: number;
    validationException?: any;
}
