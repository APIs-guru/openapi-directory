import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedScheduledUpdateGroupActionRequest } from "./failedscheduledupdategroupactionrequest";



export class BatchPutScheduledUpdateGroupActionAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FailedScheduledUpdateGroupActionRequest })
  failedScheduledUpdateGroupActions?: FailedScheduledUpdateGroupActionRequest[];
}
