import { SpeakeasyBase } from "../../../internal/utils";
export declare class MeAccount extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class MeToken extends SpeakeasyBase {
    capabilities: string[];
    id: number;
    name: string;
}
export declare class MeUser extends SpeakeasyBase {
    email: string;
    id: number;
}
export declare class Me extends SpeakeasyBase {
    account?: MeAccount;
    token?: MeToken;
    user?: MeUser;
}
