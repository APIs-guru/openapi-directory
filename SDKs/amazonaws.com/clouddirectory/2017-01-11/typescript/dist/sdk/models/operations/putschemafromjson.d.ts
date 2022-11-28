import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSchemaFromJsonHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class PutSchemaFromJsonRequestBody extends SpeakeasyBase {
    document: string;
}
export declare class PutSchemaFromJsonRequest extends SpeakeasyBase {
    headers: PutSchemaFromJsonHeaders;
    request: PutSchemaFromJsonRequestBody;
}
export declare class PutSchemaFromJsonResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidRuleException?: any;
    invalidSchemaDocException?: any;
    limitExceededException?: any;
    putSchemaFromJsonResponse?: shared.PutSchemaFromJsonResponse;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
