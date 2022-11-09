import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifySoftwareTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=FriendlyDeviceName" })
  friendlyDeviceName?: string;

  @Metadata({ data: "json, name=Session" })
  session?: string;

  @Metadata({ data: "json, name=UserCode" })
  userCode: string;
}
