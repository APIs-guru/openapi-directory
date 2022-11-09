import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddTagsToResourceXAmzTargetEnum {
    DirectoryService20150416AddTagsToResource = "DirectoryService_20150416.AddTagsToResource"
}
export declare class AddTagsToResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToResourceXAmzTargetEnum;
}
export declare class AddTagsToResourceRequest extends SpeakeasyBase {
    headers: AddTagsToResourceHeaders;
    request: shared.AddTagsToResourceRequest;
}
export declare class AddTagsToResourceResponse extends SpeakeasyBase {
    addTagsToResourceResult?: Map<string, any>;
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    tagLimitExceededException?: any;
}
