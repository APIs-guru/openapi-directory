import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";
export declare class DisableClientAuthenticationRequest extends SpeakeasyBase {
    directoryId: string;
    type: ClientAuthenticationTypeEnum;
}
