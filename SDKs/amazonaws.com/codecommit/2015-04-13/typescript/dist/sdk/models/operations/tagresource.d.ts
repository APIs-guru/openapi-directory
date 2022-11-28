import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    CodeCommit20150413TagResource = "CodeCommit_20150413.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceInput;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidRepositoryNameException?: any;
    invalidResourceArnException?: any;
    invalidSystemTagUsageException?: any;
    invalidTagsMapException?: any;
    repositoryDoesNotExistException?: any;
    resourceArnRequiredException?: any;
    statusCode: number;
    tagPolicyException?: any;
    tagsMapRequiredException?: any;
    tooManyTagsException?: any;
}
