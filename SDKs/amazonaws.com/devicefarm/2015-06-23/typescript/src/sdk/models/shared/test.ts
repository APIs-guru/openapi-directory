import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Counters } from "./counters";
import { DeviceMinutes } from "./deviceminutes";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";


// Test
/** 
 * Represents a condition that is evaluated.
**/
export class Test extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=counters" })
  counters?: Counters;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=deviceMinutes" })
  deviceMinutes?: DeviceMinutes;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @Metadata({ data: "json, name=started" })
  started?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ExecutionStatusEnum;

  @Metadata({ data: "json, name=stopped" })
  stopped?: Date;

  @Metadata({ data: "json, name=type" })
  type?: TestTypeEnum;
}
