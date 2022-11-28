import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    CodeDeploy20141006UntagResource = "CodeDeploy_20141006.UntagResource"
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
    untagResourceOutput?: Map<string, any>;
}
