import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeJwtsa extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
