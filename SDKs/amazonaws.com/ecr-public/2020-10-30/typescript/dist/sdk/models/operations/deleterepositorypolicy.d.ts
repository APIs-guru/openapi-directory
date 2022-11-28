import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRepositoryPolicyXAmzTargetEnum {
    SpencerFrontendServiceDeleteRepositoryPolicy = "SpencerFrontendService.DeleteRepositoryPolicy"
}
export declare class DeleteRepositoryPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRepositoryPolicyXAmzTargetEnum;
}
export declare class DeleteRepositoryPolicyRequest extends SpeakeasyBase {
    headers: DeleteRepositoryPolicyHeaders;
    request: shared.DeleteRepositoryPolicyRequest;
}
export declare class DeleteRepositoryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteRepositoryPolicyResponse?: shared.DeleteRepositoryPolicyResponse;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    repositoryPolicyNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
