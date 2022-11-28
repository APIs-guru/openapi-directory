import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";



export class DescribeListenersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Listener })
  listeners?: Listener[];

  @SpeakeasyMetadata()
  nextMarker?: string;
}
