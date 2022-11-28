import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateClassifierXAmzTargetEnum {
    AwsGlueCreateClassifier = "AWSGlue.CreateClassifier"
}
export declare class CreateClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateClassifierXAmzTargetEnum;
}
export declare class CreateClassifierRequest extends SpeakeasyBase {
    headers: CreateClassifierHeaders;
    request: shared.CreateClassifierRequest;
}
export declare class CreateClassifierResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createClassifierResponse?: Map<string, any>;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
