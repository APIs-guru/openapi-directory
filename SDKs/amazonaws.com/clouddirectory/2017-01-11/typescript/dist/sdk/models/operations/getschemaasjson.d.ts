import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchemaAsJsonHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class GetSchemaAsJsonRequest extends SpeakeasyBase {
    headers: GetSchemaAsJsonHeaders;
}
export declare class GetSchemaAsJsonResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getSchemaAsJsonResponse?: shared.GetSchemaAsJsonResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
