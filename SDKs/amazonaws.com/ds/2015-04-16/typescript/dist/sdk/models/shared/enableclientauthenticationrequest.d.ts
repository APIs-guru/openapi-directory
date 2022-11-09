import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";
export declare class EnableClientAuthenticationRequest extends SpeakeasyBase {
    directoryId: string;
    type: ClientAuthenticationTypeEnum;
}
