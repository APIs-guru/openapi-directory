import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeAemAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class Security extends SpeakeasyBase {
    aemAuth: SchemeAemAuth;
}
