import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetThirdPartyJobDetailsXAmzTargetEnum {
    CodePipeline20150709GetThirdPartyJobDetails = "CodePipeline_20150709.GetThirdPartyJobDetails"
}
export declare class GetThirdPartyJobDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetThirdPartyJobDetailsXAmzTargetEnum;
}
export declare class GetThirdPartyJobDetailsRequest extends SpeakeasyBase {
    headers: GetThirdPartyJobDetailsHeaders;
    request: shared.GetThirdPartyJobDetailsInput;
}
export declare class GetThirdPartyJobDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getThirdPartyJobDetailsOutput?: shared.GetThirdPartyJobDetailsOutput;
    invalidClientTokenException?: any;
    invalidJobException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
