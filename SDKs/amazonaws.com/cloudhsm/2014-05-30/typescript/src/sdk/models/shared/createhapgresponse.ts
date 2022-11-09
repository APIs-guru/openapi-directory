import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateHapgResponse
/** 
 * Contains the output of the <a>CreateHAPartitionGroup</a> action.
**/
export class CreateHapgResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HapgArn" })
  hapgArn?: string;
}
