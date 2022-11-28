import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcknowledgeThirdPartyJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeThirdPartyJob = "CodePipeline_20150709.AcknowledgeThirdPartyJob"
}
export declare class AcknowledgeThirdPartyJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcknowledgeThirdPartyJobXAmzTargetEnum;
}
export declare class AcknowledgeThirdPartyJobRequest extends SpeakeasyBase {
    headers: AcknowledgeThirdPartyJobHeaders;
    request: shared.AcknowledgeThirdPartyJobInput;
}
export declare class AcknowledgeThirdPartyJobResponse extends SpeakeasyBase {
    acknowledgeThirdPartyJobOutput?: shared.AcknowledgeThirdPartyJobOutput;
    contentType: string;
    invalidClientTokenException?: any;
    invalidNonceException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
