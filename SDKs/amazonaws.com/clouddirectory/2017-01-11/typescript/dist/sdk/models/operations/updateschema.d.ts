import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class UpdateSchemaRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class UpdateSchemaRequest extends SpeakeasyBase {
    headers: UpdateSchemaHeaders;
    request: UpdateSchemaRequestBody;
}
export declare class UpdateSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    updateSchemaResponse?: shared.UpdateSchemaResponse;
    validationException?: any;
}
