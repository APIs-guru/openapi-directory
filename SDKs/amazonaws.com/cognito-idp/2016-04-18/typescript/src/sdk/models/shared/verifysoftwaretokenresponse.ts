import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerifySoftwareTokenResponseTypeEnum } from "./verifysoftwaretokenresponsetypeenum";


export class VerifySoftwareTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Session" })
  session?: string;

  @Metadata({ data: "json, name=Status" })
  status?: VerifySoftwareTokenResponseTypeEnum;
}
