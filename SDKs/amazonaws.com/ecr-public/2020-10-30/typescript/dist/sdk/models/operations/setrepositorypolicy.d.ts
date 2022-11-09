import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SetRepositoryPolicyXAmzTargetEnum {
    SpencerFrontendServiceSetRepositoryPolicy = "SpencerFrontendService.SetRepositoryPolicy"
}
export declare class SetRepositoryPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetRepositoryPolicyXAmzTargetEnum;
}
export declare class SetRepositoryPolicyRequest extends SpeakeasyBase {
    headers: SetRepositoryPolicyHeaders;
    request: shared.SetRepositoryPolicyRequest;
}
export declare class SetRepositoryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    setRepositoryPolicyResponse?: shared.SetRepositoryPolicyResponse;
    statusCode: number;
}
