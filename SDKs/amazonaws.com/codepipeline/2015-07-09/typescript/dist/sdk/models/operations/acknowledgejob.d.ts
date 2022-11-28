import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcknowledgeJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeJob = "CodePipeline_20150709.AcknowledgeJob"
}
export declare class AcknowledgeJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcknowledgeJobXAmzTargetEnum;
}
export declare class AcknowledgeJobRequest extends SpeakeasyBase {
    headers: AcknowledgeJobHeaders;
    request: shared.AcknowledgeJobInput;
}
export declare class AcknowledgeJobResponse extends SpeakeasyBase {
    acknowledgeJobOutput?: shared.AcknowledgeJobOutput;
    contentType: string;
    invalidNonceException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
