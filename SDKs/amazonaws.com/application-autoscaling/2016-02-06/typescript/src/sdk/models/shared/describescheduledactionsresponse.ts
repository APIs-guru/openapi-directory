import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScheduledAction } from "./scheduledaction";


export class DescribeScheduledActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScheduledActions", elemType: shared.ScheduledAction })
  scheduledActions?: ScheduledAction[];
}
