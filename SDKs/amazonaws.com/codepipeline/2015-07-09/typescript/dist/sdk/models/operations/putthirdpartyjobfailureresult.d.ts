import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutThirdPartyJobFailureResultXAmzTargetEnum {
    CodePipeline20150709PutThirdPartyJobFailureResult = "CodePipeline_20150709.PutThirdPartyJobFailureResult"
}
export declare class PutThirdPartyJobFailureResultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutThirdPartyJobFailureResultXAmzTargetEnum;
}
export declare class PutThirdPartyJobFailureResultRequest extends SpeakeasyBase {
    headers: PutThirdPartyJobFailureResultHeaders;
    request: shared.PutThirdPartyJobFailureResultInput;
}
export declare class PutThirdPartyJobFailureResultResponse extends SpeakeasyBase {
    contentType: string;
    invalidClientTokenException?: any;
    invalidJobStateException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
