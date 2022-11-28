import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiActivityQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetApiActivitySecurity extends SpeakeasyBase {
    connectToken: shared.SchemeConnectToken;
}
export declare class GetApiActivityRequest extends SpeakeasyBase {
    queryParams: GetApiActivityQueryParams;
    security: GetApiActivitySecurity;
}
export declare class GetApiActivityResponse extends SpeakeasyBase {
    apiRequests?: shared.ApiRequest[];
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
