import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteClassifierXAmzTargetEnum {
    AwsGlueDeleteClassifier = "AWSGlue.DeleteClassifier"
}
export declare class DeleteClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClassifierXAmzTargetEnum;
}
export declare class DeleteClassifierRequest extends SpeakeasyBase {
    headers: DeleteClassifierHeaders;
    request: shared.DeleteClassifierRequest;
}
export declare class DeleteClassifierResponse extends SpeakeasyBase {
    contentType: string;
    deleteClassifierResponse?: Map<string, any>;
    entityNotFoundException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
