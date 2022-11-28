import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotificationsPostMailRequests extends SpeakeasyBase {
    apiModelsNotification?: shared.ApiModelsNotification;
    apiModelsNotification1?: shared.ApiModelsNotification;
    apiModelsNotification2?: shared.ApiModelsNotification;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class NotificationsPostMailRequest extends SpeakeasyBase {
    request: NotificationsPostMailRequests;
}
export declare class NotificationsPostMailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
