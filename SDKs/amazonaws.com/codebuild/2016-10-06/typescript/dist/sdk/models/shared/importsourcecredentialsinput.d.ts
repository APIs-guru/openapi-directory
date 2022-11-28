import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ServerTypeEnum } from "./servertypeenum";
export declare class ImportSourceCredentialsInput extends SpeakeasyBase {
    authType: AuthTypeEnum;
    serverType: ServerTypeEnum;
    shouldOverwrite?: boolean;
    token: string;
    username?: string;
}
