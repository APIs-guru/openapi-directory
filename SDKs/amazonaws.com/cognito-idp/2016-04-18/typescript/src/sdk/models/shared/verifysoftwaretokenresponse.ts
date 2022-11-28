import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerifySoftwareTokenResponseTypeEnum } from "./verifysoftwaretokenresponsetypeenum";



export class VerifySoftwareTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: VerifySoftwareTokenResponseTypeEnum;
}
