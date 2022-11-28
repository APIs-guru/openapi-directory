import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagProjectXAmzTargetEnum {
    CodeStar20170419TagProject = "CodeStar_20170419.TagProject"
}
export declare class TagProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagProjectXAmzTargetEnum;
}
export declare class TagProjectRequest extends SpeakeasyBase {
    headers: TagProjectHeaders;
    request: shared.TagProjectRequest;
}
export declare class TagProjectResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    limitExceededException?: any;
    projectNotFoundException?: any;
    statusCode: number;
    tagProjectResult?: shared.TagProjectResult;
    validationException?: any;
}
