import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    DirectoryService20150416ListTagsForResource = "DirectoryService_20150416.ListTagsForResource"
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceRequest;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listTagsForResourceResult?: shared.ListTagsForResourceResult;
    serviceException?: any;
    statusCode: number;
}
