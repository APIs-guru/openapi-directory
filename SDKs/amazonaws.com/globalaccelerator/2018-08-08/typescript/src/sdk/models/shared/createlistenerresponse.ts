import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";



export class CreateListenerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Listener" })
  listener?: Listener;
}
