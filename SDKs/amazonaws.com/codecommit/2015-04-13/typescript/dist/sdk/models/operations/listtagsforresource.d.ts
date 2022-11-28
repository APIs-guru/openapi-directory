import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    CodeCommit20150413ListTagsForResource = "CodeCommit_20150413.ListTagsForResource"
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceInput;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidRepositoryNameException?: any;
    invalidResourceArnException?: any;
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
    repositoryDoesNotExistException?: any;
    resourceArnRequiredException?: any;
    statusCode: number;
}
