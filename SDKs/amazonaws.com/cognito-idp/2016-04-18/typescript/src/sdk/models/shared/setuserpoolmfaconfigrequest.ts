import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { SmsMfaConfigType } from "./smsmfaconfigtype";
import { SoftwareTokenMfaConfigType } from "./softwaretokenmfaconfigtype";



export class SetUserPoolMfaConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MfaConfiguration" })
  mfaConfiguration?: UserPoolMfaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SmsMfaConfiguration" })
  smsMfaConfiguration?: SmsMfaConfigType;

  @SpeakeasyMetadata({ data: "json, name=SoftwareTokenMfaConfiguration" })
  softwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
