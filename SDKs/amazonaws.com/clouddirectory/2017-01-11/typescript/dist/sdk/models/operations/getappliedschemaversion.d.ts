import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAppliedSchemaVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAppliedSchemaVersionRequestBody extends SpeakeasyBase {
    schemaArn: string;
}
export declare class GetAppliedSchemaVersionRequest extends SpeakeasyBase {
    headers: GetAppliedSchemaVersionHeaders;
    request: GetAppliedSchemaVersionRequestBody;
}
export declare class GetAppliedSchemaVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAppliedSchemaVersionResponse?: shared.GetAppliedSchemaVersionResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
