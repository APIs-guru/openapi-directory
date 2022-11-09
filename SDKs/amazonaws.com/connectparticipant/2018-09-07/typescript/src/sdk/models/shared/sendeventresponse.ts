import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendEventResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
