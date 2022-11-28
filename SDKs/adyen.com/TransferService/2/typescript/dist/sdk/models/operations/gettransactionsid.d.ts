import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTransactionsIdSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetTransactionsIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionsIdPathParams;
    security: GetTransactionsIdSecurity;
}
export declare class GetTransactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transaction?: any;
}
