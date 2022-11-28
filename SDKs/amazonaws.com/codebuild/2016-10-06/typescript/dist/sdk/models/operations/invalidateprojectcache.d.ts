import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum InvalidateProjectCacheXAmzTargetEnum {
    CodeBuild20161006InvalidateProjectCache = "CodeBuild_20161006.InvalidateProjectCache"
}
export declare class InvalidateProjectCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InvalidateProjectCacheXAmzTargetEnum;
}
export declare class InvalidateProjectCacheRequest extends SpeakeasyBase {
    headers: InvalidateProjectCacheHeaders;
    request: shared.InvalidateProjectCacheInput;
}
export declare class InvalidateProjectCacheResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidateProjectCacheOutput?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
