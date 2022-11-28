import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveTagsFromResourceXAmzTargetEnum {
    CloudHsmFrontendServiceRemoveTagsFromResource = "CloudHsmFrontendService.RemoveTagsFromResource"
}
export declare class RemoveTagsFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromResourceXAmzTargetEnum;
}
export declare class RemoveTagsFromResourceRequest extends SpeakeasyBase {
    headers: RemoveTagsFromResourceHeaders;
    request: shared.RemoveTagsFromResourceRequest;
}
export declare class RemoveTagsFromResourceResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    invalidRequestException?: any;
    removeTagsFromResourceResponse?: shared.RemoveTagsFromResourceResponse;
    statusCode: number;
}
