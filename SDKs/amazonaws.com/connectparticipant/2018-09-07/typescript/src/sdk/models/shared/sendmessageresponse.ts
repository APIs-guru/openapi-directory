import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
