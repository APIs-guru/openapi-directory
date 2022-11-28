import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListGitHubAccountTokenNamesXAmzTargetEnum {
    CodeDeploy20141006ListGitHubAccountTokenNames = "CodeDeploy_20141006.ListGitHubAccountTokenNames"
}
export declare class ListGitHubAccountTokenNamesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGitHubAccountTokenNamesXAmzTargetEnum;
}
export declare class ListGitHubAccountTokenNamesRequest extends SpeakeasyBase {
    headers: ListGitHubAccountTokenNamesHeaders;
    request: shared.ListGitHubAccountTokenNamesInput;
}
export declare class ListGitHubAccountTokenNamesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listGitHubAccountTokenNamesOutput?: shared.ListGitHubAccountTokenNamesOutput;
    operationNotSupportedException?: any;
    resourceValidationException?: any;
    statusCode: number;
}
