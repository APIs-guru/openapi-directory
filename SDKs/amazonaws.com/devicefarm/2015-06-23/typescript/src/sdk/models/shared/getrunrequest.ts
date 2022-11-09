import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRunRequest
/** 
 * Represents a request to the get run operation.
**/
export class GetRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
