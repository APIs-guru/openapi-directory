import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteRunRequest
/** 
 * Represents a request to the delete run operation.
**/
export class DeleteRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
