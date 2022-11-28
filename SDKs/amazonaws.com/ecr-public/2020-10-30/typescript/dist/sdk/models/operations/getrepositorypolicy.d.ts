import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRepositoryPolicyXAmzTargetEnum {
    SpencerFrontendServiceGetRepositoryPolicy = "SpencerFrontendService.GetRepositoryPolicy"
}
export declare class GetRepositoryPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRepositoryPolicyXAmzTargetEnum;
}
export declare class GetRepositoryPolicyRequest extends SpeakeasyBase {
    headers: GetRepositoryPolicyHeaders;
    request: shared.GetRepositoryPolicyRequest;
}
export declare class GetRepositoryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getRepositoryPolicyResponse?: shared.GetRepositoryPolicyResponse;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    repositoryPolicyNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
