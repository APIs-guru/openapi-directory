import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduleRunConfiguration } from "./schedulerunconfiguration";
import { DeviceSelectionConfiguration } from "./deviceselectionconfiguration";
import { ExecutionConfiguration } from "./executionconfiguration";
import { ScheduleRunTest } from "./scheduleruntest";


// ScheduleRunRequest
/** 
 * Represents a request to the schedule run operation.
**/
export class ScheduleRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appArn" })
  appArn?: string;

  @Metadata({ data: "json, name=configuration" })
  configuration?: ScheduleRunConfiguration;

  @Metadata({ data: "json, name=devicePoolArn" })
  devicePoolArn?: string;

  @Metadata({ data: "json, name=deviceSelectionConfiguration" })
  deviceSelectionConfiguration?: DeviceSelectionConfiguration;

  @Metadata({ data: "json, name=executionConfiguration" })
  executionConfiguration?: ExecutionConfiguration;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=test" })
  test: ScheduleRunTest;
}
