import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PollForJobsXAmzTargetEnum {
    CodePipeline20150709PollForJobs = "CodePipeline_20150709.PollForJobs"
}
export declare class PollForJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForJobsXAmzTargetEnum;
}
export declare class PollForJobsRequest extends SpeakeasyBase {
    headers: PollForJobsHeaders;
    request: shared.PollForJobsInput;
}
export declare class PollForJobsResponse extends SpeakeasyBase {
    actionTypeNotFoundException?: any;
    contentType: string;
    pollForJobsOutput?: shared.PollForJobsOutput;
    statusCode: number;
    validationException?: any;
}
