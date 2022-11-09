import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";
import { ProblemDetail } from "./problemdetail";
import { ExecutionResultEnum } from "./executionresultenum";
import { ProblemDetail } from "./problemdetail";
import { ProblemDetail } from "./problemdetail";
import { ProblemDetail } from "./problemdetail";


// Problem
/** 
 * Represents a specific warning or failure.
**/
export class Problem extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: Device;

  @Metadata({ data: "json, name=job" })
  job?: ProblemDetail;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @Metadata({ data: "json, name=run" })
  run?: ProblemDetail;

  @Metadata({ data: "json, name=suite" })
  suite?: ProblemDetail;

  @Metadata({ data: "json, name=test" })
  test?: ProblemDetail;
}
