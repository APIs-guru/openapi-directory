import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMlTransformXAmzTargetEnum {
    AwsGlueGetMlTransform = "AWSGlue.GetMLTransform"
}
export declare class GetMlTransformHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMlTransformXAmzTargetEnum;
}
export declare class GetMlTransformRequest extends SpeakeasyBase {
    headers: GetMlTransformHeaders;
    request: shared.GetMlTransformRequest;
}
export declare class GetMlTransformResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getMlTransformResponse?: shared.GetMlTransformResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
