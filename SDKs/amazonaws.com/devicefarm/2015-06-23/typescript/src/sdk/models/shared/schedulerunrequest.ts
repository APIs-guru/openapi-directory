import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleRunConfiguration } from "./schedulerunconfiguration";
import { DeviceSelectionConfiguration } from "./deviceselectionconfiguration";
import { ExecutionConfiguration } from "./executionconfiguration";
import { ScheduleRunTest } from "./scheduleruntest";



// ScheduleRunRequest
/** 
 * Represents a request to the schedule run operation.
**/
export class ScheduleRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appArn" })
  appArn?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ScheduleRunConfiguration;

  @SpeakeasyMetadata({ data: "json, name=devicePoolArn" })
  devicePoolArn?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceSelectionConfiguration" })
  deviceSelectionConfiguration?: DeviceSelectionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=executionConfiguration" })
  executionConfiguration?: ExecutionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test: ScheduleRunTest;
}
