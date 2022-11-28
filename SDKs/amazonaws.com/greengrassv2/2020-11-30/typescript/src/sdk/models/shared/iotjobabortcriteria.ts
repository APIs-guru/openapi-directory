import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoTJobAbortActionEnum } from "./iotjobabortactionenum";
import { IoTJobExecutionFailureTypeEnum } from "./iotjobexecutionfailuretypeenum";



// IoTJobAbortCriteria
/** 
 * <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>
**/
export class IoTJobAbortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: IoTJobAbortActionEnum;

  @SpeakeasyMetadata({ data: "json, name=failureType" })
  failureType: IoTJobExecutionFailureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=minNumberOfExecutedThings" })
  minNumberOfExecutedThings: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdPercentage" })
  thresholdPercentage: number;
}
