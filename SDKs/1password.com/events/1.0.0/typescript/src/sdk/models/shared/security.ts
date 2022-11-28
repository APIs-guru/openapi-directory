import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeJwtsa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
