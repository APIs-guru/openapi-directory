import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddTagsToResourceXAmzTargetEnum {
    AmazonDmSv20160101AddTagsToResource = "AmazonDMSv20160101.AddTagsToResource"
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
    request: shared.AddTagsToResourceMessage;
}
export declare class AddTagsToResourceResponse extends SpeakeasyBase {
    addTagsToResourceResponse?: Map<string, any>;
    contentType: string;
    resourceNotFoundFault?: any;
    statusCode: number;
}
