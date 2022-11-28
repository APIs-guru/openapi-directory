import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class GetDirectoryRequest extends SpeakeasyBase {
    headers: GetDirectoryHeaders;
}
export declare class GetDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDirectoryResponse?: shared.GetDirectoryResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
