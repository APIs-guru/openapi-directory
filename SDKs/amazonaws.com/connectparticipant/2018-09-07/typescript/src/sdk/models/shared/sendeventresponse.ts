import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
