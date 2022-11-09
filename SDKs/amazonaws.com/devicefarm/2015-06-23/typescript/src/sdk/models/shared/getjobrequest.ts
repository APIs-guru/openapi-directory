import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetJobRequest
/** 
 * Represents a request to the get job operation.
**/
export class GetJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
