import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForProjectXAmzTargetEnum {
    CodeStar20170419ListTagsForProject = "CodeStar_20170419.ListTagsForProject"
}
export declare class ListTagsForProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForProjectXAmzTargetEnum;
}
export declare class ListTagsForProjectRequest extends SpeakeasyBase {
    headers: ListTagsForProjectHeaders;
    request: shared.ListTagsForProjectRequest;
}
export declare class ListTagsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listTagsForProjectResult?: shared.ListTagsForProjectResult;
    projectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
