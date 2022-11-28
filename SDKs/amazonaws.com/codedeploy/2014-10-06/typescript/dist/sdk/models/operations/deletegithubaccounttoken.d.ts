import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteGitHubAccountTokenXAmzTargetEnum {
    CodeDeploy20141006DeleteGitHubAccountToken = "CodeDeploy_20141006.DeleteGitHubAccountToken"
}
export declare class DeleteGitHubAccountTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGitHubAccountTokenXAmzTargetEnum;
}
export declare class DeleteGitHubAccountTokenRequest extends SpeakeasyBase {
    headers: DeleteGitHubAccountTokenHeaders;
    request: shared.DeleteGitHubAccountTokenInput;
}
export declare class DeleteGitHubAccountTokenResponse extends SpeakeasyBase {
    contentType: string;
    deleteGitHubAccountTokenOutput?: shared.DeleteGitHubAccountTokenOutput;
    gitHubAccountTokenDoesNotExistException?: any;
    gitHubAccountTokenNameRequiredException?: any;
    invalidGitHubAccountTokenNameException?: any;
    operationNotSupportedException?: any;
    resourceValidationException?: any;
    statusCode: number;
}
