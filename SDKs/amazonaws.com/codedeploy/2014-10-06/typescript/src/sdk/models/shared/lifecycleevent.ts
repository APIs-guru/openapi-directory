import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Diagnostics } from "./diagnostics";
import { LifecycleEventStatusEnum } from "./lifecycleeventstatusenum";


// LifecycleEvent
/** 
 * Information about a deployment lifecycle event.
**/
export class LifecycleEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=diagnostics" })
  diagnostics?: Diagnostics;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=lifecycleEventName" })
  lifecycleEventName?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: LifecycleEventStatusEnum;
}
