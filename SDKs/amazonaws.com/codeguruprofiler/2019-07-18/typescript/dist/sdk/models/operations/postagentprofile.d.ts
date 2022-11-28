import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAgentProfilePathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class PostAgentProfileQueryParams extends SpeakeasyBase {
    profileToken?: string;
}
export declare class PostAgentProfileHeaders extends SpeakeasyBase {
    contentType: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAgentProfileRequestBody extends SpeakeasyBase {
    agentProfile: string;
}
export declare class PostAgentProfileRequest extends SpeakeasyBase {
    pathParams: PostAgentProfilePathParams;
    queryParams: PostAgentProfileQueryParams;
    headers: PostAgentProfileHeaders;
    request: PostAgentProfileRequestBody;
}
export declare class PostAgentProfileResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    postAgentProfileResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
