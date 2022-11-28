import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Diagnostics } from "./diagnostics";
import { LifecycleEventStatusEnum } from "./lifecycleeventstatusenum";



// LifecycleEvent
/** 
 * Information about a deployment lifecycle event.
**/
export class LifecycleEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diagnostics" })
  diagnostics?: Diagnostics;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lifecycleEventName" })
  lifecycleEventName?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LifecycleEventStatusEnum;
}
