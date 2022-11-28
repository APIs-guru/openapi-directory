import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { ProblemDetail } from "./problemdetail";
import { ExecutionResultEnum } from "./executionresultenum";



// Problem
/** 
 * Represents a specific warning or failure.
**/
export class Problem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: Device;

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: ProblemDetail;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: ProblemDetail;

  @SpeakeasyMetadata({ data: "json, name=suite" })
  suite?: ProblemDetail;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: ProblemDetail;
}
