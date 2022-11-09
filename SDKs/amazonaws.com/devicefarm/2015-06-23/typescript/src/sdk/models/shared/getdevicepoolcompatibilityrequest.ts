import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduleRunConfiguration } from "./schedulerunconfiguration";
import { ScheduleRunTest } from "./scheduleruntest";
import { TestTypeEnum } from "./testtypeenum";


// GetDevicePoolCompatibilityRequest
/** 
 * Represents a request to the get device pool compatibility operation.
**/
export class GetDevicePoolCompatibilityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appArn" })
  appArn?: string;

  @Metadata({ data: "json, name=configuration" })
  configuration?: ScheduleRunConfiguration;

  @Metadata({ data: "json, name=devicePoolArn" })
  devicePoolArn: string;

  @Metadata({ data: "json, name=test" })
  test?: ScheduleRunTest;

  @Metadata({ data: "json, name=testType" })
  testType?: TestTypeEnum;
}
