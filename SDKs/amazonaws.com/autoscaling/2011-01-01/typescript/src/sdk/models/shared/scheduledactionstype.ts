import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledUpdateGroupAction } from "./scheduledupdategroupaction";



export class ScheduledActionsType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ScheduledUpdateGroupAction })
  scheduledUpdateGroupActions?: ScheduledUpdateGroupAction[];
}
