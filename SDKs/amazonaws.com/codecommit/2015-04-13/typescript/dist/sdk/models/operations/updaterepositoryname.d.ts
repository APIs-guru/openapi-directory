import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRepositoryNameXAmzTargetEnum {
    CodeCommit20150413UpdateRepositoryName = "CodeCommit_20150413.UpdateRepositoryName"
}
export declare class UpdateRepositoryNameHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRepositoryNameXAmzTargetEnum;
}
export declare class UpdateRepositoryNameRequest extends SpeakeasyBase {
    headers: UpdateRepositoryNameHeaders;
    request: shared.UpdateRepositoryNameInput;
}
export declare class UpdateRepositoryNameResponse extends SpeakeasyBase {
    contentType: string;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameExistsException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
