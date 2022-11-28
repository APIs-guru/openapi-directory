import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateHapgResponse
/** 
 * Contains the output of the <a>CreateHAPartitionGroup</a> action.
**/
export class CreateHapgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HapgArn" })
  hapgArn?: string;
}
