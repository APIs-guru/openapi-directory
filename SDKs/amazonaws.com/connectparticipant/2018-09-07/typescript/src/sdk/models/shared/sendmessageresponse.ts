import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
