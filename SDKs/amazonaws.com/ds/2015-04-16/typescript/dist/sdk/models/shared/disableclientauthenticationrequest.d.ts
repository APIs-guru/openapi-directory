import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";
export declare class DisableClientAuthenticationRequest extends SpeakeasyBase {
    directoryId: string;
    type: ClientAuthenticationTypeEnum;
}
