import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RemoveTagsFromResourceXAmzTargetEnum {
    DirectoryService20150416RemoveTagsFromResource = "DirectoryService_20150416.RemoveTagsFromResource"
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
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    removeTagsFromResourceResult?: Map<string, any>;
    serviceException?: any;
    statusCode: number;
}
