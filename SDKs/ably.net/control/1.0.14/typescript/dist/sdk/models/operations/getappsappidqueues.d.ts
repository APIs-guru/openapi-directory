import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAppsAppIdQueuesPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetAppsAppIdQueuesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAppsAppIdQueuesRequest extends SpeakeasyBase {
    pathParams: GetAppsAppIdQueuesPathParams;
    security: GetAppsAppIdQueuesSecurity;
}
export declare class GetAppsAppIdQueuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    queueResponses?: shared.QueueResponse[];
}
