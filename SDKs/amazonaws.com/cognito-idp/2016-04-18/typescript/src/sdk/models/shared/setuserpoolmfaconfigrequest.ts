import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { SmsMfaConfigType } from "./smsmfaconfigtype";
import { SoftwareTokenMfaConfigType } from "./softwaretokenmfaconfigtype";


export class SetUserPoolMfaConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MfaConfiguration" })
  mfaConfiguration?: UserPoolMfaTypeEnum;

  @Metadata({ data: "json, name=SmsMfaConfiguration" })
  smsMfaConfiguration?: SmsMfaConfigType;

  @Metadata({ data: "json, name=SoftwareTokenMfaConfiguration" })
  softwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
