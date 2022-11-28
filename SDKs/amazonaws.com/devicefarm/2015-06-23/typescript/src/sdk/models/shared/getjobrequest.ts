import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetJobRequest
/** 
 * Represents a request to the get job operation.
**/
export class GetJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
