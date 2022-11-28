import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";
export declare class EnableClientAuthenticationRequest extends SpeakeasyBase {
    directoryId: string;
    type: ClientAuthenticationTypeEnum;
}
