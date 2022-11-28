import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateClassifierXAmzTargetEnum {
    AwsGlueUpdateClassifier = "AWSGlue.UpdateClassifier"
}
export declare class UpdateClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClassifierXAmzTargetEnum;
}
export declare class UpdateClassifierRequest extends SpeakeasyBase {
    headers: UpdateClassifierHeaders;
    request: shared.UpdateClassifierRequest;
}
export declare class UpdateClassifierResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateClassifierResponse?: Map<string, any>;
    versionMismatchException?: any;
}
