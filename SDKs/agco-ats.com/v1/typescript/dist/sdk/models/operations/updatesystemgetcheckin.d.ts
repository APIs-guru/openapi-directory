import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSystemGetCheckinQueryParams extends SpeakeasyBase {
    clientId: string;
    preview: boolean;
}
export declare class UpdateSystemGetCheckinRequest extends SpeakeasyBase {
    queryParams: UpdateSystemGetCheckinQueryParams;
}
export declare class UpdateSystemGetCheckinResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsCheckinResult?: shared.UpdateSystemModelsCheckinResult;
}
