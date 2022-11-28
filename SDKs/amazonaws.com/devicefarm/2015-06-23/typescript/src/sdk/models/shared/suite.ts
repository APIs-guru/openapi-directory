import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Counters } from "./counters";
import { DeviceMinutes } from "./deviceminutes";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";



// Suite
/** 
 * Represents a collection of one or more tests.
**/
export class Suite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=counters" })
  counters?: Counters;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=deviceMinutes" })
  deviceMinutes?: DeviceMinutes;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @SpeakeasyMetadata({ data: "json, name=started" })
  started?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped" })
  stopped?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TestTypeEnum;
}
