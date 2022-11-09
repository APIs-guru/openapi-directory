import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// BatchAlarmActionErrorEntry
/** 
 * <p>Contains error messages associated with one of the following requests:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html">BatchAcknowledgeAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html">BatchDisableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html">BatchEnableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html">BatchResetAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html">BatchSnoozeAlarm</a> </p> </li> </ul>
**/
export class BatchAlarmActionErrorEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
