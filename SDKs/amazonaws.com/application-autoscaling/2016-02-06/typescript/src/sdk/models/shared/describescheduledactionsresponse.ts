import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledAction } from "./scheduledaction";



export class DescribeScheduledActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledActions", elemType: ScheduledAction })
  scheduledActions?: ScheduledAction[];
}
