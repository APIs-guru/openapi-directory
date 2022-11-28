import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItem } from "./unsuccessfulitem";



export class CreateFlowLogsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  flowLogIds?: string[];

  @SpeakeasyMetadata({ elemType: UnsuccessfulItem })
  unsuccessful?: UnsuccessfulItem[];
}
