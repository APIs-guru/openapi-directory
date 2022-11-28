import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClientsGetQueryParams extends SpeakeasyBase {
    tag?: string;
    limit?: number;
    offset?: number;
}
export declare class ClientsGetRequest extends SpeakeasyBase {
    queryParams: ClientsGetQueryParams;
}
export declare class ClientsGetResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsClient?: shared.ApiPagedResponseUpdateSystemModelsClient;
    contentType: string;
    statusCode: number;
}
