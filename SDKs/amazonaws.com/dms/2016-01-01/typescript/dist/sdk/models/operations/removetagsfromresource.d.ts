import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveTagsFromResourceXAmzTargetEnum {
    AmazonDmSv20160101RemoveTagsFromResource = "AmazonDMSv20160101.RemoveTagsFromResource"
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
    request: shared.RemoveTagsFromResourceMessage;
}
export declare class RemoveTagsFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    removeTagsFromResourceResponse?: Map<string, any>;
    resourceNotFoundFault?: any;
    statusCode: number;
}
