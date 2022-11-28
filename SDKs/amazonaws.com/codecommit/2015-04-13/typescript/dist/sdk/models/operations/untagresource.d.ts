import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    CodeCommit20150413UntagResource = "CodeCommit_20150413.UntagResource"
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: shared.UntagResourceInput;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidRepositoryNameException?: any;
    invalidResourceArnException?: any;
    invalidSystemTagUsageException?: any;
    invalidTagKeysListException?: any;
    repositoryDoesNotExistException?: any;
    resourceArnRequiredException?: any;
    statusCode: number;
    tagKeysListRequiredException?: any;
    tagPolicyException?: any;
    tooManyTagsException?: any;
}
