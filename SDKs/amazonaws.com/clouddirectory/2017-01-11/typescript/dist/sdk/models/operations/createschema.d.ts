import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSchemaRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CreateSchemaRequest extends SpeakeasyBase {
    headers: CreateSchemaHeaders;
    request: CreateSchemaRequestBody;
}
export declare class CreateSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createSchemaResponse?: shared.CreateSchemaResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    retryableConflictException?: any;
    schemaAlreadyExistsException?: any;
    statusCode: number;
    validationException?: any;
}
