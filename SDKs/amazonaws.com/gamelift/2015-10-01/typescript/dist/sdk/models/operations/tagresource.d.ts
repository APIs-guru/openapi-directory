import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    GameLiftTagResource = "GameLift.TagResource"
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
    request: shared.TagResourceRequest;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
    taggingFailedException?: any;
}
