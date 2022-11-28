import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMlTransformsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetMlTransformsXAmzTargetEnum {
    AwsGlueGetMlTransforms = "AWSGlue.GetMLTransforms"
}
export declare class GetMlTransformsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMlTransformsXAmzTargetEnum;
}
export declare class GetMlTransformsRequest extends SpeakeasyBase {
    queryParams: GetMlTransformsQueryParams;
    headers: GetMlTransformsHeaders;
    request: shared.GetMlTransformsRequest;
}
export declare class GetMlTransformsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getMlTransformsResponse?: shared.GetMlTransformsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
