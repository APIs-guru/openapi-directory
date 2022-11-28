import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWebhooksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWebhooksXAmzTargetEnum {
    CodePipeline20150709ListWebhooks = "CodePipeline_20150709.ListWebhooks"
}
export declare class ListWebhooksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWebhooksXAmzTargetEnum;
}
export declare class ListWebhooksRequest extends SpeakeasyBase {
    queryParams: ListWebhooksQueryParams;
    headers: ListWebhooksHeaders;
    request: shared.ListWebhooksInput;
}
export declare class ListWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listWebhooksOutput?: shared.ListWebhooksOutput;
    statusCode: number;
    validationException?: any;
}
