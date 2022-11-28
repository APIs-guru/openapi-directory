import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPartitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetPartitionsXAmzTargetEnum {
    AwsGlueGetPartitions = "AWSGlue.GetPartitions"
}
export declare class GetPartitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPartitionsXAmzTargetEnum;
}
export declare class GetPartitionsRequest extends SpeakeasyBase {
    queryParams: GetPartitionsQueryParams;
    headers: GetPartitionsHeaders;
    request: shared.GetPartitionsRequest;
}
export declare class GetPartitionsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getPartitionsResponse?: shared.GetPartitionsResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
