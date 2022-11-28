import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAppsAppIdQueuesPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class PostAppsAppIdQueuesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostAppsAppIdQueuesRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdQueuesPathParams;
    request?: shared.Queue;
    security: PostAppsAppIdQueuesSecurity;
}
export declare class PostAppsAppIdQueuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    queueResponse?: shared.QueueResponse;
}
