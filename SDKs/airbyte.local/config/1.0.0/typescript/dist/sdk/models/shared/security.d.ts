import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBearerAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    bearerAuth?: SchemeBearerAuth;
}
