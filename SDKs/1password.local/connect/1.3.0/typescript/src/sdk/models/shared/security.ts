import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeConnectToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
