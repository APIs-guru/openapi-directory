import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleRunConfiguration } from "./schedulerunconfiguration";
import { ScheduleRunTest } from "./scheduleruntest";
import { TestTypeEnum } from "./testtypeenum";



// GetDevicePoolCompatibilityRequest
/** 
 * Represents a request to the get device pool compatibility operation.
**/
export class GetDevicePoolCompatibilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appArn" })
  appArn?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ScheduleRunConfiguration;

  @SpeakeasyMetadata({ data: "json, name=devicePoolArn" })
  devicePoolArn: string;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: ScheduleRunTest;

  @SpeakeasyMetadata({ data: "json, name=testType" })
  testType?: TestTypeEnum;
}
