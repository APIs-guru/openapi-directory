import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItem } from "./unsuccessfulitem";



export class ReleaseHostsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successful?: string[];

  @SpeakeasyMetadata({ elemType: UnsuccessfulItem })
  unsuccessful?: UnsuccessfulItem[];
}
