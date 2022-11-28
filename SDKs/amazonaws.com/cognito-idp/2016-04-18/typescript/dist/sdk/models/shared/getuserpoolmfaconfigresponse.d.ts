import { SpeakeasyBase } from "../../../internal/utils";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { SmsMfaConfigType } from "./smsmfaconfigtype";
import { SoftwareTokenMfaConfigType } from "./softwaretokenmfaconfigtype";
export declare class GetUserPoolMfaConfigResponse extends SpeakeasyBase {
    mfaConfiguration?: UserPoolMfaTypeEnum;
    smsMfaConfiguration?: SmsMfaConfigType;
    softwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
}
