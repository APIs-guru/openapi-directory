import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTagsXAmzTargetEnum {
    AwsGlueGetTags = "AWSGlue.GetTags"
}
export declare class GetTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTagsXAmzTargetEnum;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    headers: GetTagsHeaders;
    request: shared.GetTagsRequest;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getTagsResponse?: shared.GetTagsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
