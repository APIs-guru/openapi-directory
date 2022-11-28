import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopTrainingDocumentClassifierXAmzTargetEnum {
    Comprehend20171127StopTrainingDocumentClassifier = "Comprehend_20171127.StopTrainingDocumentClassifier"
}
export declare class StopTrainingDocumentClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTrainingDocumentClassifierXAmzTargetEnum;
}
export declare class StopTrainingDocumentClassifierRequest extends SpeakeasyBase {
    headers: StopTrainingDocumentClassifierHeaders;
    request: shared.StopTrainingDocumentClassifierRequest;
}
export declare class StopTrainingDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopTrainingDocumentClassifierResponse?: Map<string, any>;
    tooManyRequestsException?: any;
}
