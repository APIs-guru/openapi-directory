import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeConnectToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
