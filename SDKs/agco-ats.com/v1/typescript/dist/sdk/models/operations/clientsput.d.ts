import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClientsPutPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClientsPutRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsClient?: shared.UpdateSystemModelsClient;
    updateSystemModelsClient1?: shared.UpdateSystemModelsClient;
    updateSystemModelsClient2?: shared.UpdateSystemModelsClient;
}
export declare class ClientsPutRequest extends SpeakeasyBase {
    pathParams: ClientsPutPathParams;
    request: ClientsPutRequests;
}
export declare class ClientsPutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
