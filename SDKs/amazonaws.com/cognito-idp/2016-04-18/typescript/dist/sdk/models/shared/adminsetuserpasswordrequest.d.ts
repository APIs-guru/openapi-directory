import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdminSetUserPasswordRequest extends SpeakeasyBase {
    password: string;
    permanent?: boolean;
    userPoolId: string;
    username: string;
}
