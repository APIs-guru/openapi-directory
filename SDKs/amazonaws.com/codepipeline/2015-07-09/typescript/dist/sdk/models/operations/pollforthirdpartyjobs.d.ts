import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PollForThirdPartyJobsXAmzTargetEnum {
    CodePipeline20150709PollForThirdPartyJobs = "CodePipeline_20150709.PollForThirdPartyJobs"
}
export declare class PollForThirdPartyJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForThirdPartyJobsXAmzTargetEnum;
}
export declare class PollForThirdPartyJobsRequest extends SpeakeasyBase {
    headers: PollForThirdPartyJobsHeaders;
    request: shared.PollForThirdPartyJobsInput;
}
export declare class PollForThirdPartyJobsResponse extends SpeakeasyBase {
    actionTypeNotFoundException?: any;
    contentType: string;
    pollForThirdPartyJobsOutput?: shared.PollForThirdPartyJobsOutput;
    statusCode: number;
    validationException?: any;
}
