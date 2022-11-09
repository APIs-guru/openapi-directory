import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAppsAppIdQueuesQueueIdPathParams extends SpeakeasyBase {
    appId: string;
    queueId: string;
}
export declare class DeleteAppsAppIdQueuesQueueIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteAppsAppIdQueuesQueueIdRequest extends SpeakeasyBase {
    pathParams: DeleteAppsAppIdQueuesQueueIdPathParams;
    security: DeleteAppsAppIdQueuesQueueIdSecurity;
}
export declare class DeleteAppsAppIdQueuesQueueIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
