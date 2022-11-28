import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutThirdPartyJobSuccessResultXAmzTargetEnum {
    CodePipeline20150709PutThirdPartyJobSuccessResult = "CodePipeline_20150709.PutThirdPartyJobSuccessResult"
}
export declare class PutThirdPartyJobSuccessResultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutThirdPartyJobSuccessResultXAmzTargetEnum;
}
export declare class PutThirdPartyJobSuccessResultRequest extends SpeakeasyBase {
    headers: PutThirdPartyJobSuccessResultHeaders;
    request: shared.PutThirdPartyJobSuccessResultInput;
}
export declare class PutThirdPartyJobSuccessResultResponse extends SpeakeasyBase {
    contentType: string;
    invalidClientTokenException?: any;
    invalidJobStateException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
