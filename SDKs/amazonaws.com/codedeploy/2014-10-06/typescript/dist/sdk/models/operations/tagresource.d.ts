import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    CodeDeploy20141006TagResource = "CodeDeploy_20141006.TagResource"
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
    applicationDoesNotExistException?: any;
    arnNotSupportedException?: any;
    contentType: string;
    deploymentConfigDoesNotExistException?: any;
    deploymentGroupDoesNotExistException?: any;
    invalidArnException?: any;
    invalidTagsToAddException?: any;
    resourceArnRequiredException?: any;
    statusCode: number;
    tagRequiredException?: any;
    tagResourceOutput?: Map<string, any>;
}
