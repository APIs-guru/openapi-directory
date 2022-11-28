import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobDetailsXAmzTargetEnum {
    CodePipeline20150709GetJobDetails = "CodePipeline_20150709.GetJobDetails"
}
export declare class GetJobDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobDetailsXAmzTargetEnum;
}
export declare class GetJobDetailsRequest extends SpeakeasyBase {
    headers: GetJobDetailsHeaders;
    request: shared.GetJobDetailsInput;
}
export declare class GetJobDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getJobDetailsOutput?: shared.GetJobDetailsOutput;
    jobNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
