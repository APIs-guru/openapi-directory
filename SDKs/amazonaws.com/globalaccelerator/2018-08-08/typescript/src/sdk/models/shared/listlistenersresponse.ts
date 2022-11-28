import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";



export class ListListenersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Listeners", elemType: Listener })
  listeners?: Listener[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
