import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSignInAttemptsSecurity extends SpeakeasyBase {
    jwtsa: shared.SchemeJwtsa;
}
export declare class GetSignInAttemptsRequest extends SpeakeasyBase {
    request?: any;
    security: GetSignInAttemptsSecurity;
}
export declare class GetSignInAttemptsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getSignInAttempts200ApplicationJsonAny?: any;
}
