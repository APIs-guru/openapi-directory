import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuthIntrospectSecurity extends SpeakeasyBase {
    jwtsa: shared.SchemeJwtsa;
}
export declare class GetAuthIntrospectRequest extends SpeakeasyBase {
    security: GetAuthIntrospectSecurity;
}
export declare class GetAuthIntrospectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    introspection?: shared.Introspection;
    statusCode: number;
}
