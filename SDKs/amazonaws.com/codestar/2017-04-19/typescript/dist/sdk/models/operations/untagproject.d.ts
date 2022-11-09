import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UntagProjectXAmzTargetEnum {
    CodeStar20170419UntagProject = "CodeStar_20170419.UntagProject"
}
export declare class UntagProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagProjectXAmzTargetEnum;
}
export declare class UntagProjectRequest extends SpeakeasyBase {
    headers: UntagProjectHeaders;
    request: shared.UntagProjectRequest;
}
export declare class UntagProjectResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    limitExceededException?: any;
    projectNotFoundException?: any;
    statusCode: number;
    untagProjectResult?: Map<string, any>;
    validationException?: any;
}
