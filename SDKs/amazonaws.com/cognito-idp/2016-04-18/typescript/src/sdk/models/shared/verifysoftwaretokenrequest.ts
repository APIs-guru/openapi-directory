import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifySoftwareTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FriendlyDeviceName" })
  friendlyDeviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: string;

  @SpeakeasyMetadata({ data: "json, name=UserCode" })
  userCode: string;
}
