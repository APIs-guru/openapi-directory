import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedScheduledUpdateGroupActionRequest } from "./failedscheduledupdategroupactionrequest";



export class BatchDeleteScheduledActionAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FailedScheduledUpdateGroupActionRequest })
  failedScheduledActions?: FailedScheduledUpdateGroupActionRequest[];
}
