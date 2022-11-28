import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteRunRequest
/** 
 * Represents a request to the delete run operation.
**/
export class DeleteRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
