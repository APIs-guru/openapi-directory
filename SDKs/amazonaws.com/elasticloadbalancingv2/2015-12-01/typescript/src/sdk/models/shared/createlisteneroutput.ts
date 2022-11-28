import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";



export class CreateListenerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Listener })
  listeners?: Listener[];
}
