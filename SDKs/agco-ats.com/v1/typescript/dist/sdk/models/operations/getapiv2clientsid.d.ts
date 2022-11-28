import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2ClientsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV2ClientsIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2ClientsIdPathParams;
}
export declare class GetApiV2ClientsIdResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsClient?: shared.UpdateSystemModelsClient;
}
