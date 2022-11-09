import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopRunRequest
/** 
 * Represents the request to stop a specific run.
**/
export class StopRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
