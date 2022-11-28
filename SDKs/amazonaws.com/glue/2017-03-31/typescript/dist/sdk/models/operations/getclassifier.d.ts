import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetClassifierXAmzTargetEnum {
    AwsGlueGetClassifier = "AWSGlue.GetClassifier"
}
export declare class GetClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetClassifierXAmzTargetEnum;
}
export declare class GetClassifierRequest extends SpeakeasyBase {
    headers: GetClassifierHeaders;
    request: shared.GetClassifierRequest;
}
export declare class GetClassifierResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getClassifierResponse?: shared.GetClassifierResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
