import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetMeRequest extends SpeakeasyBase {
    security: GetMeSecurity;
}
export declare class GetMeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    me?: shared.Me;
}
